import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "../styles/Services.css";
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
  /* padding: 5rem 2rem; */
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
  padding: 2rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursos: pointer;
  background: #fff;
  color: #000;
  margin-left: 14px;
`;

export default function Home() {
  const fade = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <div id="home" className="home">
        <motion.p
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        >
          Como deseja nos passar as informações?
        </motion.p>
        <a href="/Servicesxml">
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
            Desejo inserir um arquivo XML!
          </Button>
        </a>
        <a href="/Services">
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
            Desejo inserir os dados manualmente!
          </Button>
        </a>
      </div>
    </div>
  );
}
