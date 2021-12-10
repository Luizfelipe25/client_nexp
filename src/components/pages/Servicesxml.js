import "../styles/Services.css";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";

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
  const [file, setFile] = useState();

  /*   axios
    .get(file, {
      "Content-Type": "application/xml; charset=utf-8",
    })
    .then((response) => {
      console.log(file, response.data);
    }); */

  const calculo = () => {
    const buyValue = buyQtd * buyPrice;
    const sellValue = sellQtd * SellPrice;
    const aliquot = sellValue - buyValue;

    if (aliquot < 0) {
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

  return (
    <div className="main">
      <div className="title">
        <center>Cálculo do Imposto de Renda</center>
        <br />
        <p>
          Insira o arquivo XML enviado por sua corretora, para que os calculos
          sejam realizados!
        </p>
        <br></br>
        <form>
          <input
            type="file"
            name="file"
            onChange={(e) => {
              var rawFile = new XMLHttpRequest();
              rawFile.open("GET", e.target.files[0], false);
              rawFile.onreadystatechange = () => {
                if (rawFile.readyState === 4) {
                  if (rawFile.status === 200 || rawFile.status == 0) {
                    var xmlasstring = rawFile.responseText;
                    console.log("Your xml file as string", xmlasstring);
                  }
                }
              };
              /* console.log(e.target.files[0]); */
            }}
          ></input>
          <Button
            className="saibamaisbtn"
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "#1888ff",
              border: "none",
              color: "#000",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
          >
            Carregar
          </Button>
        </form>
        <br></br>
      </div>
    </div>
  );
}

export default Services;
