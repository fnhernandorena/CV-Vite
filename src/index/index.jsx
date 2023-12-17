import React, { useState } from "react";
import "../styles/index.css";

const Index = ({ onLangChange }) => {
  return (
    <main>
      <div className="container inicio">
        <b>
          <h1 className="tit-inicio">
            Hi! I'm Francisco Hernandorena <i className="fa-solid fa-code"></i>
          </h1>
        </b>
        <div className="row">
          <div className="col bot-inic">
            <h3>
              Bienvenido!
              <br /> este es mi
              <br /> curriculum
            </h3>
            <p>
              Si hablas español
              <br /> selecciona esta opcion:
            </p>
            <button
              type="button"
              className="btn btn-primary btn-in"
              onClick={() => onLangChange('esp')}
            >
              Vamos! <i className="fa-solid fa-bolt"></i>
            </button>
          </div>
          <div className="col bot-inic">
            <h3>
              Welcome!
              <br /> this is my <br />
              curriculum
            </h3>
            <p>
              If you talk english <br />
              pick this option:
            </p>
            <button
              type="button"
              className="btn btn-primary btn-in"
              onClick={() => onLangChange('ing')}
            >
              Come on! <i className="fa-solid fa-bolt"></i>
            </button>
          </div>
          <div className="col bot-inic">
            <h3>
              Benvenuto!
              <br /> questo è il mio
              <br /> curriculum
            </h3>
            <p>
              Se parli italiano
              <br /> seleziona questa opzione:
            </p>
            <button
              type="button"
              className="btn btn-primary btn-in"
              onClick={() => onLangChange('ita')}
            >
              Dai! <i className="fa-solid fa-bolt"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
