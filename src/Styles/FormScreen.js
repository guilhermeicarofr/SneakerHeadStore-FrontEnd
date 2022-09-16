import styled from "styled-components";

const FormScreenStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  > div {
    background-color: #22223b;
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div:first-child {
    background-color: #e1e6ec;
    object-fit: cover;
    > img {
      width: 250px;
      height: 250px;
    }
  }
  @media (max-width: 650px) {
    > div:first-child {
      display: none;
    }
    > div {
      width: 100%;
    }
  }
`;

export default FormScreenStyle;
