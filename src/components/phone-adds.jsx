import React, { useEffect } from "react";
import "../styles/navs.css";

const Buttons = () => {
  useEffect(() => {
    "use strict";

    const boton = document.getElementById("button-open");
    const naveg = document.getElementById("naveg");
    const btnClose = document.getElementById("btn-close");

    const handleClickOpen = () => {
      naveg.style.visibility = "visible";
      btnClose.style.visibility = "visible";
      boton.style.visibility = "hidden";
      naveg.style.opacity = 1;
      btnClose.style.opacity = 1;
      boton.style.opacity = 0;
    };

    const handleClickClose = () => {
      naveg.style.visibility = "hidden";
      btnClose.style.visibility = "hidden";
      boton.style.visibility = "visible";
      naveg.style.opacity = 0;
      btnClose.style.opacity = 0;
      boton.style.opacity = 1;
    };

    boton.addEventListener("click", handleClickOpen);
    btnClose.addEventListener("click", handleClickClose);

    return () => {
      boton.removeEventListener("click", handleClickOpen);
      btnClose.removeEventListener("click", handleClickClose);
    };
  }, []);

  return (
    <div>
      <div id="button-open">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div id="btn-close">
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default Buttons;
