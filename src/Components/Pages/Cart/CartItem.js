import { useContext } from 'react';
import { IoTrashOutline } from 'react-icons/io5';

import { StoreContext } from '../../Contexts/storeContext.js';

import { CartItemContainer } from '../../../Styles/cartStyles.js'

export default function CartItem({ id, model, brand, color, img, price, size, cartindex }) {

    const { shopcart, setShopcart } = useContext(StoreContext);

    function removeItem() {
        setShopcart(shopcart.filter((item,index) => !(item.id===id && index===cartindex)));
    }

    return (
        <CartItemContainer>
            <img src={img} alt=''/>
            <div>
                <h1>{brand} {model}</h1>
                <h2>Tam: {size}</h2>
                <h3>${(price/100).toFixed(2)}</h3>
                <h4>Cor: {color}</h4>
                <button onClick={removeItem}><IoTrashOutline /></button>
            </div>
        </CartItemContainer>
    );
}