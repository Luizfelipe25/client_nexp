import "../styles/Services.css";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";

const RFvalues = [
  '{"limitValue": 20000}',
  '{"lowTrib": 0.15}',
  '{"highTrib": 0.20}',
];

const fixValues = (json) => JSON.parse(json);
const Limvalue = (values) => values.limitValue;
const lowvalue = (values) => values.lowTrib;
const higvalue = (values) => values.highTrib;
const resolvelim = RFvalues.map(fixValues).map(Limvalue);
const resolvelow = RFvalues.map(fixValues).map(lowvalue);
const resolvehig = RFvalues.map(fixValues).map(higvalue);
const limitValue = resolvelim[0];
const lowValue = resolvelow[1];
const highValue = resolvehig[2];

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
  const [buyValue, setbuyValue] = useState(0);
  const [sellValue, setsellValue] = useState(0);
  const [SellPrice, setSellPrice] = useState(0);
  const [dt, setdt] = useState("");
  const [resultado, setresultado] = useState("");
  const [show, setShow] = useState(false);
  const [file, setFile] = useState();

  const calculo = () => {
    let sell = parseInt(sellValue);
    let buy = parseInt(buyValue);
    const aliquot = sell - buy;

    if (aliquot <= 0) {
      return setresultado("Ação isenta de tributos");
    }
    if (aliquot <= limitValue) {
      if (dt === "s") {
        return setresultado(
          (aliquot * highValue).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        );
      } else {
        return setresultado("Ação isenta de tributos");
      }
    }
    if (aliquot > limitValue) {
      if (dt === "s") {
        return setresultado(
          (aliquot * highValue).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        );
      } else {
        return setresultado(aliquot * lowValue).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
    }
  };

  return (
    <div className="main">
      <div className="title">
        <center>Cálculo do Imposto de Renda</center>
        <br />
        <p>Insira o arquivo XML da nota de corretagem da opcão de venda!</p>
        <br></br>
        <form>
          <input
            type="file"
            name="file"
            onChange={(e) => {
              const file = e.target.files[0];

              const reader = new FileReader();

              reader.readAsText(file);

              const test = (reader.onloadend = (evt) => {
                const readerData = evt.target.result;

                const parser = new DOMParser();
                const xml = parser.parseFromString(readerData, "text/xml");

                setbuyValue(
                  xml.getElementsByTagName("text:span")[15].childNodes[0]
                    .nodeValue
                );
              });
            }}
          ></input>
        </form>
        <br></br>
        <br></br>
        <form>
          <p>Insira o arquivo XML da nota de corretagem da opcão de Compra!</p>
          <br></br>
          <input
            type="file"
            name="file"
            onChange={(e) => {
              const file = e.target.files[0];

              const reader = new FileReader();

              reader.readAsText(file);

              reader.onloadend = (evt) => {
                const readerData = evt.target.result;

                const parser = new DOMParser();
                const xml = parser.parseFromString(readerData, "text/xml");

                setsellValue(
                  xml.getElementsByTagName("text:span")[15].childNodes[0]
                    .nodeValue
                );
              };
            }}
          ></input>
        </form>
        <br></br>
        <br></br>
        <div className="second">
          <strong>É DayTrade? * </strong>
          <br></br>
          <br></br>
          <br></br>
          <form>
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
          </form>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h3>
            Imposto a pagar: <strong>{resultado}</strong>
          </h3>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <Button
          className="saibamaisbtn"
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.95,
            backgroundColor: "#1888ff",
            border: "none",
            color: "#000",
          }}
          onClick={calculo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          Calcular
        </Button>
        <br />
        <br />
        <p>
          Caso não possua uma das duas notas, insira os dados manualmente
          <a href="/Services">AQUI</a>
        </p>
      </div>
    </div>
  );
}

export default Services;
