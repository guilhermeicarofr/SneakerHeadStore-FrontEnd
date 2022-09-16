import styled from "styled-components";

const HeaderStyle = styled.header`
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(73, 73, 102, 1) 5%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    > span {
      font-size: 30px;
    }
  }
  h1 {
    font-family: "Ms Madi", cursive;
    font-size: 42px;
    transition: all ease-in-out 200ms;
    &:hover {
      color: #f2e9e4;
    }
  }
`;

export default HeaderStyle;
