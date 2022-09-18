import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../Contexts/storeContext.js";
import { getProducts } from "../../../Services/axios.js";
import Product from "./Product.js";
import NavBar from "./NavBar.js";
import CartMenu from '../Cart/CartMenu.js';

export default function Store() {
  const { products, setProducts } = useContext(StoreContext);
  const [selectedproduct, setSelectedproduct] = useState("");
  const [ showcart, setShowcart ] = useState(false);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((res) => {
        console.log(res.error);
      });
  }, [setProducts]);
  return (
    <>
      <NavBar setShowcart={setShowcart} />
      <CartMenu showcart={showcart} setShowcart={setShowcart} />
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
            model={product.model}
            brand={product.brand}
            color={product.color}
            price={product.price}
            img={product.img}
            key={index}
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
