import SignUpStyle from "../../Styles/sign-up-style";
import tenis from "./assets/tênis.jpg";
import FormStyle from "../../Styles/formStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonStyle from "../../Styles/button";
import { signUp } from "../../Services/axios";
export default function SignUp() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    setIsBlocked(true);
    if (form.password !== form.confirmPassword) {
      alert("As senhas fornecidas devem ser iguais");
      setIsBlocked(false);
      return;
    }
    signUp(form)
      .catch((answer) => {
        console.log(answer);
        setIsBlocked(false);
      })
      .then((answer) => {
        console.log(answer);
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
          <h1>SneakerHead Store</h1>
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
          <ButtonStyle type="submit" disabled={isBlocked}>
            Cadastre-se
          </ButtonStyle>
          <p>Já possui uma conta ? Faça login clicando aqui !!</p>
        </FormStyle>
      </div>
    </SignUpStyle>
  );
}
