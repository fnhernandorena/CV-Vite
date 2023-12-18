import "../../styles/headers.css";

const Header = ({ onLogout }) => {
  return (
    <header>
      <div>
        <p></p>
        <h1>
          <b>
            Hola, soy Francisco Nicolas Hernandorena{" "}
            <i className="fa-solid fa-code"></i>
          </b>
        </h1>
        <button class="btn btn-primary" onClick={onLogout}><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
      </div>
    </header>
  );
};

export default Header;
