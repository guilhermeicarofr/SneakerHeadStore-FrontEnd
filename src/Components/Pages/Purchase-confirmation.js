import UserContext from "../Contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PurchaseConfirmation() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <PurchaseConfirmationStyle>
      <div>
        <h1>Confirme sua compra</h1>
        <div>
          <ul>
            <li>
              Rise nitro , 37 <span>$ 50</span>
            </li>
            <li>
              Air max 97, 33 <span>$ 75</span>
            </li>
            <li>
              Retro 7 Citrus, 38 <span>$ 30</span>
            </li>
          </ul>
          <span>Total : $ 500</span>
          <div>
            <button>Confirmar compra</button>
            <button onClick={() => navigate("/")}>
              Escolher mais produtos
            </button>
          </div>
        </div>
      </div>
    </PurchaseConfirmationStyle>
  );
}
const PurchaseConfirmationStyle = styled.div`
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
    background-color: rgba(58, 54, 54, 0.897);
    border-radius: 18px;
    font-size: 20px;
    > h1 {
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
    ul {
      height: 170px;
      overflow-y: auto;
      margin-bottom: 10px;
      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
      }
    }
    > div {
      padding: 10px 20px 20px 20px;
      > span {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 40px;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        > button {
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
          @media (max-width: 450px) {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
