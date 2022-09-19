import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../Contexts/userContext";
import PurchaseConfirmationStyle from "../../Styles/Purchase-confirmation-style";
import { StoreContext } from "../Contexts/storeContext";
import { finalizePurchase } from "../../Services/axios";

import styled from "styled-components";

export default function PurchaseConfirmation() {
  const { shopcart } = useContext(StoreContext);
  return (
    <PurchaseConfirmationStyle>
      <div>
        <h1>Confirme sua compra</h1>
        <div>
          <ul>
            <li>
              Rise nitro - 37 <span>$ 50</span>
            </li>
            <li>
              Air max 97 - 33 <span>$ 75</span>
            </li>
            <li>
              Retro 7 Citrus - 38 <span>$ 30</span>
            </li>
          </ul>
          <span>Total : $ 500</span>
        </div>
        <h1>Endereço</h1>
        <Adress></Adress>
      </div>
    </PurchaseConfirmationStyle>
  );
}
function Adress() {
  const { user } = useContext(UserContext);
  const [isBlocked, setIsBlocked] = useState(false);
  const { shopcart } = useContext(StoreContext);
  const [form, setForm] = useState({
    adress: "",
    number: "",
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
        products: shopcart,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    )
      .then(() => {
        setIsBlocked(false);
        navigate("/");
      })
      .catch((answer) => {
        console.log(answer);
        setIsBlocked(false);
      });
    return;
  }
  return (
    <FormFinalizeStyle onSubmit={submitData}>
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
`;
