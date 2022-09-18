import { useContext } from 'react';
import styled from 'styled-components';

import { StoreContext } from '../../Contexts/storeContext.js';

export default function CartItem({ id, model, brand, color, img, price, size }) {

    const { shopcart, setShopcart } = useContext(StoreContext);

    function removeItem() {
        setShopcart(shopcart.filter((item)=>item.id!==id));
    }

    return (
        <CartItemContainer>
            <img src={img} alt=''/>
            <div>
                <h1>{brand} {model}</h1>
                <h2>{size}</h2>
                <h2>{color}</h2>
                <h3>${(price/100).toFixed(2)}</h3>
                <button onClick={removeItem}>X</button>
            </div>
        </CartItemContainer>
    );
}

const CartItemContainer = styled.li`
    width: 100%;
    display: flex;
    img {
        width: 70px;
        height: 70px;
    }
`;