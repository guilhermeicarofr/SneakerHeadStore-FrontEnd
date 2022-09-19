import styled from "styled-components";

const ProductCard = styled.div`
    border-radius: ${(props) => (props.selected ? "50px;" : "10px;")};
    position: relative;
    color: #22223B;
    width: 160px;
    height: 220px;
    margin: 10px;
    background-color: #f2e9e4;
    border: 1px solid #f2e9e4;
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
    ${(props) =>
        props.click[1] <= props.view[1] / 2 ? "top: 0px;" : "bottom: 0px;"}
    ${(props) =>
        props.click[0] <= props.view[0] / 2 ? "left: 0px;" : "right: 0px;"}
    width: 320px;
    height: 450px;
    z-index: 1;
    color: #22223B;
    background-color: #f1eeed;
    border: 1px solid #f1eeed;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
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
    h3 {
    position: absolute;
    bottom: 65px;
    right: 40px;
    z-index: 1;
    font-size: 20px;
    font-weight: 700;
    }
    h4 {
    position: absolute;
    top: 325px;
    right: 40px;
    z-index: 1;
    font-size: 18px;
    font-weight: 400;
    max-width: 100px;
    }
    > button {
    z-index: 1;
    position: absolute;
    width: 25px;
    height: 25px;
    font-size: 15px;
    border: transparent;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) =>
    props.click[1] <= props.view[1] / 2 ? "top:15px;" : "bottom: 15px;"}
    ${(props) =>
    props.click[0] <= props.view[0] / 2 ? "left: 15px;" : "right: 15px;"}
    }
`;

export { ProductCard, ProductExpanded }