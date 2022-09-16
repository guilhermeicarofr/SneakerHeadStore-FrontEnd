import styled from 'styled-components';

import Product from './Product.js';

import sneakers from '../../../sneakers.json';
import { useState } from 'react';

export default function Store() {

    //alterar para basear no id
    const [ selectedproduct, setSelectedproduct ] = useState('');

    return (
        <StoreContainer onClick={(e) => {if(e.target.localName==='main') setSelectedproduct('')}}>
            {sneakers.map((snk,index) =>
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
            )}
        </StoreContainer>        
    );
}

const StoreContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;