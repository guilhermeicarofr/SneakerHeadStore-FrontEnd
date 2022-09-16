import styled from "styled-components";
import HeaderStyle from "../../../Styles/header.js";
import Product from "./Product.js";
import { IoBagOutline, IoPersonOutline, IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext.js";
import { useContext } from "react";
import sneakers from "../../../sneakers.json";
import { useState } from "react";
import { IconBuy, IconUser } from "../../../Styles/Icons.js";
export default function Store() {
  //alterar para basear no id
  const [selectedproduct, setSelectedproduct] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [showLogOut, setShowLogOut] = useState(false);
  return (
    <>
      <HeaderStyle>
        <LogOut
          show={showLogOut}
          setShowLogOut={setShowLogOut}
          setUser={setUser}
        ></LogOut>
        <div>
          <IconUser>
            {user ? (
              <>
                <IoPerson onClick={() => setShowLogOut(true)}></IoPerson>
              </>
            ) : (
              <IoPersonOutline
                onClick={() => navigate("/sign-in")}
              ></IoPersonOutline>
            )}
          </IconUser>
        </div>
        <h1>SneakerHead</h1>
        <IconBuy>
          <IoBagOutline></IoBagOutline>
        </IconBuy>
      </HeaderStyle>
      <StoreContainer
        onClick={(e) => {
          if (e.target.localName === "main") setSelectedproduct("");
        }}
      >
        {sneakers.map((snk, index) => (
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
        ))}
      </StoreContainer>
    </>
  );
}

const StoreContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
`;
function LogOut({ show, setShowLogOut, setUser }) {
  return (
    <LogOutStyle show={show}>
      <h2>Deseja sair da sua conta ?</h2>
      <div>
        <span
          onClick={() => {
            setUser(null);
            localStorage.removeItem("user");
            setShowLogOut(false);
          }}
        >
          Sim
        </span>
        <span onClick={() => setShowLogOut(false)}>Não</span>
      </div>
    </LogOutStyle>
  );
}
const LogOutStyle = styled.div`
  width: 250px;
  height: 120px;
  background-color: #f2e9e4;
  border-radius: 5px;
  position: fixed;
  z-index: 2;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  text-align: center;
  padding: 10px;
  transition: all ease-in-out 300ms;
  top: ${(props) => (props.show ? "20px" : "-120px")};
  left: 40%;
  border: 2px solid #22223b;
  div {
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-evenly;
    span {
      border: 2px solid #22223b;
      border-radius: 10px;
      width: 80px;
      cursor: pointer;
      &:hover {
        background-color: #22223b;
        color: #f2e9e4;
      }
    }
    span:first-child {
      margin-right: 20px;
    }
  }
`;
