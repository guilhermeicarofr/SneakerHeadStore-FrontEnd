import styled from "styled-components";

const IconBuy = styled.div`
  font-size: 28px;
  border-radius: 50%;
  cursor: pointer;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 200ms;
  &:hover {
    background-color: #f2e9e4;
  }
`;
const IconUser = styled.div`
  cursor: pointer;
  font-size: 28px;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 200ms;
  position: relative;
  &:hover {
    background-color: #f2e9e4;
  }
`;
export { IconBuy, IconUser };
