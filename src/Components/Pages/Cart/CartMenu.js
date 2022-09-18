import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { StoreContext } from '../../Contexts/storeContext.js';
import UserContext from '../../Contexts/userContext';

import CartItem from './CartItem.js'

export default function CartMenu({ showcart, setShowcart }) {

    const { products, shopcart } = useContext(StoreContext);
    const { user } = useContext(UserContext);

    const navigate = useNavigate();
    
    const list = products.filter((product) =>
        shopcart.map((item)=>item.id).includes(product._id)
    ).map((product) => {
        return (
            {
                ...product,
                size: shopcart.find(item =>item.id === product._id).size
            }
        );
    });
    

    if(showcart) {
        return (
            <CartMenuLayer>
                <div onClick={()=>setShowcart(false)}>
                </div>
                <menu>
                    <button className='close' onClick={()=>setShowcart(false)}>X</button>
                    <h1>{user ? user?.name : 'Faça Log-In para finalizar a compra'}</h1>
                    <h2>Você possui {shopcart.length} itens no carrinho</h2>
                    
                    <ul>
                        {list.map((product,index) => <CartItem
                            key={index}
                            id={product._id}
                            model={product.model}
                            brand={product.brand}
                            color={product.color}
                            img={product.img}
                            price={product.price}
                            size={product.size}
                        />)}
                    </ul>

                    <h3>${list.length?
                        (list.map(product => product.price).reduce((a, b) => a + b) / 100).toFixed(2) :
                        '0.00'
                    }</h3>

                    {(!user) ?
                        <button onClick={()=>navigate('/sign-in')}>Fazer Log-In</button>
                    :
                        (shopcart.length) ?
                            <button onClick={()=>navigate('/purchase-confirmation')}>Finalizar Compra</button>
                        :
                            <button onClick={()=>setShowcart(false)}>Adicione um produto</button>
                    }
                </menu>
            </CartMenuLayer>
        );
    } else {
        return (
            <>
            </>
        );
    }
}

const CartMenuLayer = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 3;
    display: flex;
    > div{
        width: Calc(100vw - 320px);
        height: 100vh;
        background-color: rgba(74, 78, 105, 0.5);
    }
    menu {
        width: 320px;
        height: 100vh;
        background-color: #F2E9E4;
        display: flex;
        flex-direction: column;
        align-items: center;
        button.close {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 15px;
            height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: transparent;
            background-color: transparent;
        }
        ul {
            width: 100%;
        }
    }
`;