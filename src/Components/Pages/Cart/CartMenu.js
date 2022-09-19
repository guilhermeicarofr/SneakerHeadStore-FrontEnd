import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { StoreContext } from '../../Contexts/storeContext.js';
import UserContext from '../../Contexts/userContext';

import { CartMenuLayer } from '../../../Styles/cartStyles.js'
import CartItem from './CartItem.js'

export default function CartMenu({ showcart, setShowcart }) {

    const { products, shopcart, totalvalue, setTotalvalue } = useContext(StoreContext);
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const list = shopcart.map((item) => {
        return (
            {
                id: item.id,
                size: item.size,
                ...(products.find((product) => product._id === item.id))

            }
        );
    });

    useEffect(() => {
        if(list.length) {
            setTotalvalue(list.map(product => product.price).reduce((a, b) => a + b));
        } else {
            setTotalvalue(0);
        }
    },[list,setTotalvalue]);


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
                            cartindex={index}
                            id={product._id}
                            model={product.model}
                            brand={product.brand}
                            color={product.color}
                            img={product.img}
                            price={product.price}
                            size={product.size}
                        />)}
                    </ul>

                    <h3>${totalvalue ? (totalvalue / 100).toFixed(2) : '0.00'}</h3>

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