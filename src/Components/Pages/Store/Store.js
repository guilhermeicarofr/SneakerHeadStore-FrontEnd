import styled from "styled-components";
import HeaderStyle from "../../../Styles/header.js";
import Product from "./Product.js";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { getProducts } from '../../../Services/axios.js';
import { useState, useEffect } from "react";

export default function Store() {

  const [ products, setProducts ] = useState([]);
  const [selectedproduct, setSelectedproduct] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
    .then((res) => {
      setProducts(res.data);
    })
    .catch((res) => {
      console.log(res.error);
    });
  },[]);







  return (
    <>
      <HeaderStyle>
        <IconUser onClick={() => navigate("/sign-in")}>
          <IoPersonOutline></IoPersonOutline>
        </IconUser>
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
        {products.map((product, index) => (
          <Product
            selectedproduct={selectedproduct}
            setSelectedproduct={setSelectedproduct}
            id={product._id}
            key={index}
            model={product.model}
            brand={product.brand}
            color={product.color}
            price={product.price}
            img={product.img}
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
