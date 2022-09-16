import { useState, useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "../../Contexts/storeContext.js";

export default function ProductSelector({ id, setSelectedproduct }) {
  const { shopcart, setShopcart } = useContext(StoreContext);

  const [selectedsize, setSelectedsize] = useState("");

  function selectSize(e) {
    setSelectedsize(e.target.innerHTML);
  }
  function addToCart() {
    if (!selectedsize) {
      alert("Selecione um tamanho!");
      return;
    }
    setShopcart([...shopcart, { id, size: selectedsize }]);
    setSelectedproduct("");
  }

  return (
    <Selector>
      <div className="sizes">
        <Size selectedsize={selectedsize} onClick={selectSize}>
          36
        </Size>
        <Size selectedsize={selectedsize} onClick={selectSize}>
          37
        </Size>
        <Size selectedsize={selectedsize} onClick={selectSize}>
          38
        </Size>
        <Size selectedsize={selectedsize} onClick={selectSize}>
          39
        </Size>
        <Size selectedsize={selectedsize} onClick={selectSize}>
          40
        </Size>
        <Size selectedsize={selectedsize} onClick={selectSize}>
          41
        </Size>
        <Size selectedsize={selectedsize} onClick={selectSize}>
          42
        </Size>
        <Size selectedsize={selectedsize} onClick={selectSize}>
          43
        </Size>
      </div>
      <button onClick={addToCart}>Adicionar ao Carrinho</button>
    </Selector>
  );
}

const Selector = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  min-height: 130px;
  width: 320px;
  div.sizes {
    position: absolute;
    left: 30px;
    bottom: 60px;
    width: 120px;
    height: 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  button {
    position: absolute;
    bottom: 10px;
    width: 120px;
    height: 40px;
    left: calc(100% / 2 - 60px);
    background-color: #22223b;
    border: 1px solid #22223b;
    border-radius: 20px;
    color: #f1eeed;
    font-size: 12px;
    font-weight: 700;
  }
`;

const Size = styled.div`
  width: 22px;
  height: 22px;
  margin: 3px;
  background-color: ${(props) =>
    props.children === props.selectedsize ? "#22223b" : "#f1eeed"};
  color: ${(props) =>
    props.children === props.selectedsize ? "#f1eeed" : "#22223b"};
  font-size: 15px;
  font-weight: 700;
  border: 1px solid #22223b;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
