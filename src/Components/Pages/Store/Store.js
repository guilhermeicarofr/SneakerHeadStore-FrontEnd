import styled from 'styled-components';

import Product from './Product.js';

import sneakers from '../../../sneakers.json';

export default function Store() {

    
    return (
        <StoreContainer>
            {sneakers.map((snk,index) =>
                <Product
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