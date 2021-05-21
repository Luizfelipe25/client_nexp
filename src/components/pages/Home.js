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
            Seja Bem-vindo!
          </motion.h1>
          <motion.p
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
          >
            Organize seus resultados
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
            <h1 className="text">NEXP.</h1>
            <h2>Para você, investidor!</h2>
            <br />
            <span>
              <FaFileAlt /> <FaCaretRight /> <FaFileUpload /> <FaCaretRight />
              <FaCalculator /> <FaCaretRight /> <FaChartLine />
            </span>
            <br />
            <span>
              Se você investe, já percebeu que dá trabalho ler todas as notas de
              corretagem para contabilizar seus gastos ao fim do mês não é
              mesmo?!.
            </span>
            <span>
              A NEXP. é uma plataforma segura onde você investidor poderá fazer
              o upload ilimitado de suas notas e receber de uma maneira rápida e
              gratuita a soma de seus gastos.
            </span>
            <br />
            <br />
            <a href="/login">
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
