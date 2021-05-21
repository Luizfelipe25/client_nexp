import "../styles/SignUp.css";
import { useState } from "react";
import Axios from "axios";

function SignUp() {
  const [cpfReg, setcpfReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [nascdateReg, setnascdateReg] = useState("");
  const [nomeReg, setnomeReg] = useState("");
  const [show, setShow] = useState(false);

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      cpf: cpfReg,
      password: passwordReg,
      email: emailReg,
      nascdate: nascdateReg,
      nome: nomeReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="login">
      <h2>NEXP</h2>
      <i />
      <div className="login-logo"></div>
      <div className="login-right">
        <h1>Cadastro</h1>
        <div className="login-loginInputEmail">
          <input
            type="text"
            placeholder="Digite seu Nome"
            size="255"
            onChange={(e) => {
              setnomeReg(e.target.value);
            }}
          />
        </div>
        <div className="login-loginInputEmail">
          <input
            type="text"
            placeholder="Digite seu CPF"
            size="255"
            onChange={(e) => {
              setcpfReg(e.target.value);
            }}
          />
        </div>
        <div className="login-loginInputEmail">
          <input
            type="date"
            size="255"
            onChange={(e) => {
              setnascdateReg(e.target.value);
            }}
          />
        </div>
        <div className="login-loginInputEmail">
          <input
            type="text"
            placeholder="Digite seu Email"
            size="255"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </div>
        <div className="login-loginInputPassword">
          <input
            type="password"
            placeholder="Elabore uma senha"
            size="255"
            onChange={(e) => {
              setpasswordReg(e.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={register}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default SignUp;
