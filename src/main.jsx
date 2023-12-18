import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Index from "./index";
import EspFather from "./index/fathers/esp-father";
import IngFather from "./index/fathers/ing-father";
import ItaFather from "./index/fathers/ita-father";

const Root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const storedLang = localStorage.getItem("lang");
  const [lang, setLang] = useState(storedLang || "none");

  const handleLangChange = (newLang) => {
    console.log(`Changing language to ${newLang}`);
    setLang(newLang);
  };

  const handleLogout = () => {
    localStorage.removeItem("lang");
    setLang("none");
  };

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <React.StrictMode>
      {lang === "none" && <Index onLangChange={handleLangChange} />}
      {lang === "esp" && <EspFather onLogout={handleLogout} />}
      {lang === "ing" && <IngFather onLogout={handleLogout} />}
      {lang === "ita" && <ItaFather onLogout={handleLogout} />}
    </React.StrictMode>
  );
};

Root.render(<App />);
