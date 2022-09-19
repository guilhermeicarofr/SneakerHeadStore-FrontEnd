import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoBagOutline, IoPersonOutline, IoPerson } from "react-icons/io5";
import UserContext from "../../Contexts/userContext.js";
import { StoreContext } from "../../Contexts/storeContext.js";
import { IconBuy, IconUser } from "../../../Styles/Icons.js";
import HeaderStyle from "../../../Styles/header.js";
import { deleteSession } from "../../../Services/axios.js";

export default function NavBar({ setShowcart }) {
  const { shopcart } = useContext(StoreContext);
  const { user, setUser } = useContext(UserContext);
  const [showLogOut, setShowLogOut] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <LogOut show={showLogOut} setShowLogOut={setShowLogOut}></LogOut>
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
      <IconBuy onClick={() => setShowcart(true)}>
        <IoBagOutline></IoBagOutline>
        {shopcart.length ? <h3>{shopcart.length}</h3> : ""}
      </IconBuy>
    </HeaderStyle>
  );
}
function LogOut({ show, setShowLogOut }) {
  const { user, setUser } = useContext(UserContext);
  return (
    <LogOutStyle show={show}>
      <h2>Deseja sair da sua conta ?</h2>
      <div>
        <span
          onClick={() => {
            deleteSession({
              headers: { Authorization: `Bearer ${user.token}` },
            })
              .then(() => {
                setUser(null);
                localStorage.removeItem("user");
                setShowLogOut(false);
              })
              .catch((answer) => console.log(answer));
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
