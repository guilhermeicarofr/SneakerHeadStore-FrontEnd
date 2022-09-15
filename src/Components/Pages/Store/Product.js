import { useState } from 'react';
import styled from 'styled-components';

import ProductSelector from './ProductSelector.js';

export default function Product({ model, brand, price, color, img }) {

    const [ selected, setSelected ] = useState(false);
    const [ click, setClick ] = useState([0,0]);

    const view = [ window.innerWidth, window.innerHeight ];

    function selectCard() {
        if(selected) {
            setSelected(false);
        } else {
            setSelected(true);
        }
    }


    if(selected) {
        return (
            <ProductCard selected={selected}onClick={selectCard}>
                <ProductExpanded click={click} view={view} onClick={()=>setSelected(!selected)}>
                    <h2>{brand}</h2>
                    <h1>{model}</h1>
                    <img src={img} alt='' />
                    <ProductSelector />
                </ProductExpanded>
            </ProductCard>
        );
    } else {
        return (
            <ProductCard onClick={(e)=> {
                setClick([e.clientX,e.clientY]);
                selectCard();
            }}>
                <img src={img} alt='' />
                <footer>
                    <h1>{model}</h1>
                    <p>${(price/100).toFixed(2)}</p>
                </footer>
            </ProductCard>
        );
    }
}

const ProductCard = styled.div`
    border-radius: ${props => (props.selected)? '50px;' : '10px;'};
    position: relative;
    width: 160px;
    height: 220px;
    margin: 10px;
    background-color: #F2E9E4;
    border: 1px solid #F2E9E4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    img {
        position: absolute;
        top: 0px;
        width: 160px;
        height: 160px;
        border-radius: 10px;
    }
    footer {
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 2px 10px 2px 10px;
        h1 {
            text-align: start;
            font-size: 18px;
            text-overflow: clip;
        }
        p {
            margin-top: 2px;
            text-align: left;
            font-size: 16px;
        }
    }
`;

const ProductExpanded = styled.div`
    position: absolute;
    ${props => (props.click[1]<=props.view[1]/2) ? 'top: 0px;' : 'bottom: 0px;'}
    ${props => (props.click[0]<=props.view[0]/2) ? 'left: 0px;' : 'right: 0px;'}
    width: 320px;
    height: 450px;
    z-index: 1;
    background-color: #F1EEED;
    border: 1px solid #F1EEED;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    img {
        width: 320px;
        height: 320px;
        border-radius: 50px;
        position: absolute;
        top: 0px;
    }
    h1 {
        position: absolute;
        top: 40px;
        z-index: 1;
        font-size: 24px;
    }
    h2 {
        position: absolute;
        top: 20px;
        z-index: 1;
        font-size: 18px;
        font-weight: 700;
    }
`;