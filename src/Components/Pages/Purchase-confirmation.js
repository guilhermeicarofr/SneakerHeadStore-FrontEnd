import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import UserContext from "../Contexts/userContext";
import PurchaseConfirmationStyle from "../../Styles/Purchase-confirmation-style";
import { finalizePurchase } from "../../Services/axios";

import styled from "styled-components";

export default function PurchaseConfirmation() {
  const { state: list } = useLocation();
  const { user } = useContext(UserContext);
  return (
    <PurchaseConfirmationStyle>
      {user ? (
        <div>
          <h1>Confirme sua compra</h1>
          <div>
            <ul>
              {list.map((e, index) => (
                <li key={index}>
                  <div>
                    {e.model} - {e.size}
                  </div>
                  <span>$ {(e.price / 100).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <span>
              Total : ${" "}
              {(
                list.reduce((total, value) => total + value.price, 0) / 100
              ).toFixed(2)}
            </span>
          </div>
          <h1>Endereço</h1>
          <Adress list={list}></Adress>
        </div>
      ) : (
        <h1 style={{ "font-size": "40px" }}>Não autorizado</h1>
      )}
    </PurchaseConfirmationStyle>
  );
}
function Adress({ list }) {
  const { user } = useContext(UserContext);
  const [isBlocked, setIsBlocked] = useState(false);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [form, setForm] = useState({
    adress: "",
    number: "",
    card: "",
  });
  const navigate = useNavigate();
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  function submitData(event) {
    event.preventDefault();
    setIsBlocked(true);
    finalizePurchase(
      {
        user: {
          name: user.name,
          email: user.email,
          adress: form.adress,
          number: form.number,
        },
        products: list,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    )
      .then(() => {
        setIsBlocked(false);
        setPurchaseCompleted(true);
        setTimeout(() => navigate("/"), 1000);
      })
      .catch((answer) => {
        console.log(answer);
        setIsBlocked(false);
      });
    return;
  }
  return (
    <FormFinalizeStyle onSubmit={submitData}>
      {purchaseCompleted ? (
        <h1>Compra Concluída com sucesso</h1>
      ) : (
        <>
          <Inputs
            form={form}
            handleForm={handleForm}
            isBlocked={isBlocked}
          ></Inputs>
          <button onClick={() => navigate("/")} disabled={isBlocked}>
            Voltar
          </button>
          <button type="submit" disabled={isBlocked}>
            Finalizar pedido
          </button>
        </>
      )}
    </FormFinalizeStyle>
  );
}
function Inputs({ form, handleForm, isBlocked }) {
  return (
    <>
      <p>Rua</p>
      <input
        type="text"
        name="adress"
        required
        value={form.adress}
        onChange={handleForm}
        readOnly={isBlocked}
      />
      <p>Número</p>
      <input
        type="number"
        name="number"
        required
        value={form.number}
        onChange={handleForm}
        readOnly={isBlocked}
      />
      <p>Número do cartão</p>
      <input
        type="number"
        name="card"
        required
        value={form.card}
        onChange={handleForm}
        readOnly={isBlocked}
      />
    </>
  );
}
const FormFinalizeStyle = styled.form`
  padding: 30px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  input {
    outline: none;
    margin: 10px 0;
    height: 30px;
    width: 70%;
    font-size: 18px;
    color: black;
  }
  input[type="number"] {
    width: 90px;
  }
  input[name="card"] {
    width: 170px;
  }
  input::placeholder {
    color: black;
  }
  button {
    margin-top: 10px;
    background-color: #22223b;
    outline: none;
    border: none;
    border-radius: 10px;
    color: #f2e9e4;
    width: 50%;
    min-height: 30px;
    margin: 5px 0;
    font-size: 18px;
    min-width: 130px;
    cursor: pointer;
    &:hover {
      background-color: #141313;
    }
  }
  h1 {
    color: rgb(27, 148, 16);
  }
`;
