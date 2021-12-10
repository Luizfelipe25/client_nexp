import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "../styles/Home.css";
import {
  FaCalculator,
  FaChartLine,
  FaFileUpload,
  FaFileAlt,
  FaCaretRight,
} from "react-icons/fa";

const Column = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  height: 100vh;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;
const SobColumn = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
  span {
    margin: 1rem 0;
    font-size: 1.5rem;
    line-height: 1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursos: pointer;
  background: transparent;
  color: #fff;
`;

const Videobg = styled.video``;

export default function Home() {
  const fade = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <div id="home" className="home">
        <Column>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Sem tempo para calcular o IR de sua operação na bolsa?
          </motion.h1>
          <motion.p
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
          >
            A NEXP resolve para você!
          </motion.p>
          <a href="#sobre">
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
              Saiba Mais
            </Button>
          </a>
        </Column>
      </div>
      <div id="sobre" className="sobre">
        <SobColumn>
          <div className="sobredesc">
            <h1 className="text">NEXP</h1>
            <h2>Para você, investidor!</h2>
            <br />
            <span>
              <FaFileAlt /> <FaCaretRight /> <FaFileUpload /> <FaCaretRight />
              <FaCalculator /> <FaCaretRight /> <FaChartLine />
            </span>
            <br />
            <span>
              Se você é um investidor, com certeza sabe que calcular tributos no
              papel exige muito tempo e que qualquer erro pode causar uma multa
              ou até o bloqueio do seu CPF!
            </span>
            <span>
              A NEXP é uma plataforma rápida que vai calcular o IR a partir da
              nota de corretagem de sua operação na B3.
            </span>
            <span>
              Basta inserir apenas os valores das ações contidos na nota que a
              NEXP faz os calculos para você!
            </span>
            <br />
            <br />
            <a href="/Services1">
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
                Comece Agora!
              </Button>
            </a>
          </div>
        </SobColumn>
      </div>
    </div>
  );
}
