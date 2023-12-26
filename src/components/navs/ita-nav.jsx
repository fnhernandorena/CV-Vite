import "../../styles/navs.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ScrollChange from "./nav-scroll";

const Nav = ({navId}) => {

  return (
    <nav id={navId}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activo" : "nav-button")}
      >
        <div className="boton">
          {" "}
          Informazioni generali <i className="fa-solid fa-circle-user"></i>
        </div>
      </NavLink>
      <NavLink
        to="/formacionAcademica"
        className={({ isActive }) => (isActive ? "activo" : "nav-button")}
      >
        <div className="boton">
          {" "}
          Formazione accademica <i className="fa-solid fa-pen-to-square"></i>{" "}
        </div>
      </NavLink>
      <NavLink
        to="/experienciaLaboral"
        className={({ isActive }) => (isActive ? "activo" : "nav-button")}
      >
        <div className="boton">
          {" "}
          Esperienza di lavoro <i className="fa-solid fa-flask"></i>
        </div>
      </NavLink>
      <NavLink
        to="/contacto"
        className={({ isActive }) => (isActive ? "activo" : "nav-button")}
      >
        <div className="boton">
          {" "}
          Contatto <i className="fa-solid fa-compass"></i>
        </div>
      </NavLink>
      {<ScrollChange />}
    </nav>
  );
};

export default Nav;
