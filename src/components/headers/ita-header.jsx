import "../../styles/headers.css";

const Header = ({ onLogout }) => {
  return (
    <header>
      <div>
        <p></p>
        <h1>
          <b>
            Ciao, sono Francisco Nicolas Hernandorena
            <i className="fa-solid fa-code"></i>
          </b>
        </h1>
        <button className="btn btn-primary btn-ex" onClick={onLogout}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
