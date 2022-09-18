import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../Contexts/userContext";
import { useState } from "react";

export default function FinalizeOrder() {
  const { user } = useContext(UserContext);
  const [isBlocked, setIsBlocked] = useState(false);
  const [form, setForm] = useState({
    adress: "",
    number: "",
  });
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  const navigate = useNavigate();
  return (
    <FinalizeOrderStyle>
      <div>
        <h1>Informe seus dados</h1>
        <FormFinalizeStyle>
          <p>Rua</p>
          <input
            type="text"
            name="adress"
            placeholder="Digite sua rua"
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
          <button onClick={() => navigate("/purchase-confirmation")}>
            Voltar
          </button>
          <button onClick={() => navigate("/")}>Finalizar pedido</button>
        </FormFinalizeStyle>
      </div>
    </FinalizeOrderStyle>
  );
}
const FormFinalizeStyle = styled.form`
  margin-top: 80px;
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
    background-color: #20aa13;
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
const FinalizeOrderStyle = styled.div`
  background-color: #f2e9e4;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  > div {
    height: 400px;
    width: 80%;
    max-width: 800px;
    background-color: rgba(170, 196, 194, 0.897);
    border-radius: 18px;
    font-size: 20px;
  }
  h1 {
    height: 40px;
    background-color: #20aa13;
    color: #f2e9e4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    text-align: center;
    @media (max-width: 450px) {
      font-size: 18px;
    }
  }
`;
