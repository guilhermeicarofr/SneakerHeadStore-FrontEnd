import styled from "styled-components";

const PurchaseConfirmationStyle = styled.div`
  background-color: #4a4e69;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  padding: 40px 0;
  > div {
    width: 80%;
    max-width: 800px;
    background-color: rgba(170, 196, 194, 0.897);
    border-radius: 18px;
    font-size: 20px;
    > h1 {
      height: 40px;
      background-color: #22223b;
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
        font-size: 15px;
        span {
          display: inline-flex;
          width: 65px;
          margin-left: 5px;
        }
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
    }
  }
`;

export default PurchaseConfirmationStyle;
