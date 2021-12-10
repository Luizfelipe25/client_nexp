import "../styles/Login.css";
import { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { MdEmail, MdLock } from "react-icons/md";
import { Modal } from "../Modal";
import { GlobalStyle } from "../ModalStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-raidus: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function Login() {
  const [cpf, setcpf] = useState("");
  const [password, setpassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      cpf: cpf,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].cpf);
      }
    });
  };

  const cadastrobtn = () => {
    window.location.href = "/SignUp";
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="login">
      <h2>NEXP</h2>
      <i />
      <div className="login-logo"></div>
      <div className="login-right">
        <h1>Entrar</h1>
        <div className="login-loginInputEmail">
          <MdEmail />
          <input
            type="text"
            placeholder="Digite seu CPF"
            onChange={(e) => {
              setcpf(e.target.value);
            }}
          />
        </div>
        <div className="login-loginInputPassword">
          <MdLock />
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={login}>
          Login
        </button>
        <button type="submit" onClick={cadastrobtn}>
          Cadastre-se
        </button>
        <button onClick={openModal} className="forgotPass">
          <h4>Esqueci minha senha</h4>
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
        <GlobalStyle></GlobalStyle>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default Login;
