import styled from "styled-components";
import HeaderStyle from "../../../Styles/header.js";
import Product from "./Product.js";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext.js";
import { useContext } from "react";
import sneakers from "../../../sneakers.json";
import { useState } from "react";

export default function Store() {
  //alterar para basear no id
  const [selectedproduct, setSelectedproduct] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <>
      <HeaderStyle>
        <div>
          <IconUser onClick={() => navigate("/sign-in")}>
            <IoPersonOutline></IoPersonOutline>
          </IconUser>
          {user ? <span>{user.name}</span> : ""}
        </div>
        <h1>SneakerHead</h1>
        <IconBuy>
          <IoBagOutline></IoBagOutline>
        </IconBuy>
      </HeaderStyle>
      <StoreContainer
        onClick={(e) => {
          if (e.target.localName === "main") setSelectedproduct("");
        }}
      >
        {sneakers.map((snk, index) => (
          <Product
            selectedproduct={selectedproduct}
            setSelectedproduct={setSelectedproduct}
            // _id
            key={index}
            model={snk.model}
            brand={snk.brand}
            color={snk.color}
            price={snk.price}
            img={snk.img}
          />
        ))}
      </StoreContainer>
    </>
  );
}

const StoreContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
`;
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
  &:hover {
    background-color: #f2e9e4;
  }
`;
