import "../styles/Services.css";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Modal } from "../Modal";

const Button = styled(motion.button)`
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursos: pointer;
  background: transparent;
  color: #fff;
  width: 320px;
  height: 40px;
`;
function Services() {
  const [nome, setnome] = useState(0);
  const [buyQtd, setbuyQtd] = useState(0);
  const [buyPrice, setbuyPrice] = useState(0);
  const [sellQtd, setsellQtd] = useState(0);
  const [SellPrice, setSellPrice] = useState(0);
  const [dt, setdt] = useState("");
  const [resultado, setresultado] = useState("");
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const calculo = () => {
    const buyValue = buyQtd * buyPrice;
    const sellValue = sellQtd * SellPrice;
    const aliquot = sellValue - buyValue;

    if (aliquot <= 0) {
      return setresultado("Ação isenta de tributos");
    }
    if (aliquot <= 20000) {
      if (dt === "s") {
        return setresultado(
          (aliquot * 0.2).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        );
      } else {
        return setresultado("Ação isenta de tributos");
      }
    }
    if (aliquot > 20000) {
      if (dt === "s") {
        return setresultado(
          (aliquot * 0.2).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        );
      } else {
        return setresultado(aliquot * 0.15).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
    }
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="main">
      <div className="title">
        <center>Cálculo do Imposto de Renda</center>
        <br />
        <p>
          Você vai encontrar as informações solicitadas abaixo em sua nota de
          corretagem
        </p>
        <div className="form">
          <form>
            <br />
            <br />
            <div className="grupo">
              <br />
              <h3>Operação de Compra</h3>
              <br />
              <br />
              <label>
                <strong>Quantidade de ações: * </strong>
              </label>
              <input
                type="number"
                name="qtd"
                id="qtd"
                required
                onChange={(e) => {
                  setbuyQtd(e.target.value);
                }}
              />
              <br />
              <label>
                <strong>Preço da ação: * </strong>
              </label>
              <input
                type="number"
                name="preco"
                id="preco"
                required
                onChange={(e) => {
                  setbuyPrice(e.target.value);
                }}
              />
              <br />
              <br />
              <hr></hr>
              <br />
              <br />
              <br />
              <h3>Operação de Venda</h3>
              <br />
              <br />
              <label>
                <strong>Quantidade de ações: * </strong>
              </label>
              <input
                type="number"
                name="qtd"
                id="qtd"
                required
                onChange={(e) => {
                  setsellQtd(e.target.value);
                }}
              />
              <br />
              <label>
                <strong>Preço da ação: * </strong>
              </label>
              <input
                type="number"
                name="preco"
                id="preco"
                required
                onChange={(e) => {
                  setSellPrice(e.target.value);
                }}
              />
              <br />
              <br />
              <hr></hr>
              <br />
              <label>
                <strong>É DayTrade? * </strong>
              </label>
              <br /> <br /> <br />
              <input
                type="radio"
                id="s"
                name="fav_language"
                value="s"
                required
                onChange={(e) => {
                  setdt(e.target.value);
                }}
              />
              <label>Sim</label>
              <br />
              <br />
              <input
                type="radio"
                id="n"
                name="fav_language"
                value="n"
                required
                onChange={(e) => {
                  setdt(e.target.value);
                }}
              />
              <label>Não</label>
              <br />
            </div>
            <br />
            <br />
            <br />
            <div>
              <h3>
                Imposto a pagar: <strong id="result">{resultado}</strong>
              </h3>
            </div>
            <br />
            <br />
            <br />
            <Button
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "#1888ff",
                border: "none",
                color: "#000",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
              onClick={calculo}
              type="button"
            >
              Calcular
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Services;
