import styled from "styled-components";

const SignUpStyle = styled.div`
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
    > img {
      width: 100%;
      height: 100%;
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

export default SignUpStyle;
