import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Index from "./index";
import EspFather from "./index/fathers/esp-father";
import IngFather from "./index/fathers/ing-father";
import ItaFather from "./index/fathers/ita-father";

const Root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [lang, setLang] = useState("none");

  const handleLangChange = (newLang) => {
    console.log(`Changing language to ${newLang}`);
    setLang(newLang);
  };

  return (
    <React.StrictMode>
      {lang === "none" && <Index onLangChange={handleLangChange} />}
      {lang === "esp" && <EspFather />}
      {lang === "ing" && <IngFather />}
      {lang === "ita" && <ItaFather />}
    </React.StrictMode>
  );
};

Root.render(<App />);
