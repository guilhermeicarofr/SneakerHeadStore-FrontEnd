import styled from 'styled-components';

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
        color: #22223b;
        > button:first-of-type {
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
            width: 320px;
            height: Calc(100% - 130px);
            position: absolute;
            top: 60px;
            right: 0px;
            overflow-y: scroll;
        }
        > h1 {
            position: absolute;
            top: 10px;
            font-size: 17px;
        }
        > h2 {
            position: absolute;
            top: 30px;
            font-size: 16px;
            font-weight: 700;
        }
        > h3 {
            position: absolute;
            bottom: 40px;
            background-color: #F2E9E4;
            font-size: 20px;
            font-weight: 700;
        }
        > button:last-of-type {
            position: absolute;
            bottom: 10px;
            width: 180px;
            height: 25px;
            background-color: #22223b;
            border: 1px solid #22223b;
            border-radius: 10px;
            color: #F2E9E4;
            font-weight: 700;
        }
    }
`;

const CartItemContainer = styled.li`
    width: 295px;
    height: 80px;
    margin: 5px;
    border: 1px solid #22223b;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    img {
        margin-left: 5px;
        width: 70px;
        height: 70px;
    }
    div {
        width: 100%;
        height: 100%;
        position: relative;
        h1 {
            position: absolute;
            top: 5px;
            left: 5px;
            font-weight: 700;
        }
        h2 {
            position: absolute;
            bottom: 5px;
            left: 5px;
        }
        h3 {
            position: absolute;
            bottom: 5px;
            right: 25px;
            font-weight: 700;
        }
        h4 {
            position: absolute;
            bottom: 20px;
            left: 5px;
        }
        button {
            position: absolute;
            bottom: 10px;
            right: 0px;
            width: 30px;
            height: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: transparent;
            background-color: transparent;

        }
    }
`;

export { CartMenuLayer, CartItemContainer };