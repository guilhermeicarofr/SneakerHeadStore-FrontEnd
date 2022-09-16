import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import { ProductCard, ProductExpanded } from "../../../Styles/product-card-styles.js";

import ProductSelector from "./ProductSelector.js";

export default function Product({
  selectedproduct,
  setSelectedproduct,
  id,
  model,
  brand,
  price,
  color,
  img,
}) {
  const [click, setClick] = useState([0, 0]);
  const view = [window.innerWidth, window.innerHeight];
  const selected = (id === selectedproduct);

  function selectCard(e) {
    setClick([e.clientX, e.clientY]);
    setSelectedproduct(id);
  }

  if (selected) {
    return (
      <ProductCard selected={selected}>
        <ProductExpanded click={click} view={view}>
          <h2>{brand}</h2>
          <h1>{model}</h1>
          <img src={img} alt="" />
          <h3>${(price / 100).toFixed(2)}</h3>
          <h4>{color}</h4>
          <button onClick={()=>setSelectedproduct('')}><IoCloseOutline /></button>
          <ProductSelector id={id} setSelectedproduct={setSelectedproduct} />
        </ProductExpanded>
      </ProductCard>
    );
  } else {
    return (
      <ProductCard onClick={selectCard}>
        <img src={img} alt="" />
        <footer>
          <h1>{model}</h1>
          <p>${(price / 100).toFixed(2)}</p>
        </footer>
      </ProductCard>
    );
  }
}