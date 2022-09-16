import tenis from "../../assets/tênis.jpg";
import FormStyle from "../../Styles/formStyle";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import ButtonStyle from "../../Styles/button";
import { signIn } from "../../Services/axios";
import FormScreenStyle from "../../Styles/FormScreen";
import UserContext from "../Contexts/userContext";
export default function SignIn() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [warning, setWarning] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    setWarning(false);
    setIsBlocked(true);
    signIn(form)
      .then((answer) => {
        setIsBlocked(false);
        setUser({ ...answer.data, email: form.email });
        localStorage.setItem(
          "user",
          JSON.stringify({ ...answer.data, email: form.email })
        );
        navigate("/");
      })
      .catch((answer) => {
        console.log(answer);
        setWarning("Usuário não encontrado/senha inválida");
        setIsBlocked(false);
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <FormScreenStyle>
      <div>
        <img src={tenis} alt="tênis" />
      </div>
      <div>
        <FormStyle onSubmit={submitData}>
          <h1 onClick={() => navigate("/")}>SneakerHead Store</h1>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            required
            value={form.email}
            onChange={handleForm}
            readOnly={isBlocked}
          />
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            required
            value={form.password}
            onChange={handleForm}
            readOnly={isBlocked}
          />
          {warning ? <span>{warning}</span> : ""}
          <ButtonStyle type="submit" disabled={isBlocked}>
            Login
          </ButtonStyle>
          <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
            <p>Não possui uma conta? Clique aqui e cadastre-se</p>
          </Link>
        </FormStyle>
      </div>
    </FormScreenStyle>
  );
}
