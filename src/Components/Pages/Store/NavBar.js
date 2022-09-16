import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";

import { StoreContext } from '../../../Contexts/storeContext.js';

import HeaderStyle from "../../../Styles/header.js";

export default function NavBar() {

    const { shopcart } = useContext(StoreContext);
    
    const navigate = useNavigate();

    return (
        <HeaderStyle>
            <IconUser onClick={() => navigate("/sign-in")}>
                <IoPersonOutline></IoPersonOutline>
            </IconUser>
            <h1>SneakerHead</h1>
            <IconBuy>
                <IoBagOutline></IoBagOutline>
                {(shopcart.length)?<h3>{shopcart.length}</h3>:''}
            </IconBuy>
        </HeaderStyle>
    );
}

const IconBuy = styled.div`
  position: relative;
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
  h3 {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f2e9e4;
    font-weight: 700;
    background-color: #22223b;
    border-radius: 10px;
    font-size: 15px;
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
  &:hover {
    background-color: #f2e9e4;
  }
`;