import SignUpStyle from "../../Styles/sign-up-style";
import tenis from "./assets/tênis.jpg";
import FormStyle from "../../Styles/formStyle";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ButtonStyle from "../../Styles/button";
import { signUp } from "../../Services/axios";
export default function SignUp() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [warning, setWarning] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    setWarning(false);
    setIsBlocked(true);
    if (form.password !== form.confirmPassword) {
      setWarning("As senhas fornecidas devem ser iguais");
      setIsBlocked(false);
      return;
    }
    signUp(form)
      .then((answer) => {
        console.log(answer);
        setIsBlocked(false);
        navigate("/sign-in");
      })
      .catch((answer) => {
        console.log(answer);
        if (answer.response.status === 422) {
          setWarning(
            "Nome deve ter pelo menos 3 caracteres. Senha deve ter pelo menos 4 caracteres"
          );
          setIsBlocked(false);
          return;
        }
        setWarning("E-mail já está em uso");
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
    <SignUpStyle>
      <div>
        <img src={tenis} alt="tênis" />
      </div>
      <div>
        <FormStyle onSubmit={submitData}>
          <h1 onClick={() => navigate("/")}>SneakerHead Store</h1>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
            value={form.name}
            onChange={handleForm}
            readOnly={isBlocked}
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            required
            value={form.confirmPassword}
            onChange={handleForm}
            readOnly={isBlocked}
          />
          {warning ? <span>{warning}</span> : ""}
          <ButtonStyle type="submit" disabled={isBlocked}>
            Cadastre-se
          </ButtonStyle>
          <Link to={"/sign-in"} style={{ textDecoration: "none" }}>
            <p>Já possui uma conta ? Faça login clicando aqui !!</p>
          </Link>
        </FormStyle>
      </div>
    </SignUpStyle>
  );
}
