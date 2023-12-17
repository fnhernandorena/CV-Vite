import "../../styles/pages.css";

const Cont = () => {
  return (
    <main>
      <ul className="text">
        <li>
          <h3>Contatto rapido</h3>
          <ul>
            <li className="cont">
              <i className="fa-solid fa-envelope"></i> Email:{" "}
              <a href="mailto:fnhernandorena@gmail.com" className="item">
                fnhernandorena@gmail.com{" "}
              </a>
            </li>
            <li className="cont">
              <i className="fa-brands fa-linkedin"></i> LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/francisco-nicolas-hernandorena-21b2a9294/"
                className="item"
              >
                Francisco Nicolas Hernandorena
              </a>
            </li>
            <li className="cont">
              <i className="fa-brands fa-instagram"></i> Instagram:{" "}
              <a
                href="https://www.instagram.com/nico_hernandorenaa/"
                className="item"
              >
                Nico_hernandorenaa
              </a>
            </li>

            <li className="cont">
              <i className="fa-brands fa-telegram"></i> Telegram:{" "}
              <a href="https://t.me/Nico_Hernandorena" className="item">
                Nico_Hernandorena
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
};

export default Cont;
