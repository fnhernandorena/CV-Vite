import "../../styles/navs.css";
import { NavLink } from "react-router-dom";
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
          Informacion general <i className="fa-solid fa-circle-user"></i>
        </div>
      </NavLink>
      <NavLink
        to="/formacionAcademica"
        className={({ isActive }) => (isActive ? "activo" : "nav-button")}
      >
        <div className="boton">
          {" "}
          Formacion academica <i className="fa-solid fa-pen-to-square"></i>
        </div>
      </NavLink>
      <NavLink
        to="/experienciaLaboral"
        className={({ isActive }) => (isActive ? "activo" : "nav-button")}
      >
        <div className="boton">
          {" "}
          Experiencia laboral <i className="fa-solid fa-flask"></i>
        </div>
      </NavLink>
      <NavLink
        to="/contacto"
        className={({ isActive }) => (isActive ? "activo" : "nav-button")}
      >
        <div className="boton">
          {" "}
          Contacto <i className="fa-solid fa-compass"></i>
        </div>
      </NavLink>
      {<ScrollChange />}
    </nav>
  );
};

export default Nav;
