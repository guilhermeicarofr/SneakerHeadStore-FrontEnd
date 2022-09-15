import styled from 'styled-components';

import ProductCard from './ProductCard.js';

import sneakers from '../../../sneakers.json';

export default function Store() {

    
    return (
        <StoreContainer>
            {sneakers.map((snk,index) =>
                <ProductCard
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