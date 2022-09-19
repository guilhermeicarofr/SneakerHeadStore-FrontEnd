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
  position: relative;
  &:hover {
    background-color: #f2e9e4;
  }
  h3 {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    background-color: #22223B;
    color: #f2e9e4;
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
