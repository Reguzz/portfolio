import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useParams } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation("global");
  const { lang } = useParams();
  const langi18n = i18n.language;
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lingua selezionata: {lang}</h1>
      <h1>Lingua selezionata: {langi18n}</h1>
      <h1>Vite + React</h1>
      <h1>{t("HomePage.hello")}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Home;
