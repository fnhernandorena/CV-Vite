import "../../styles/pages.css";

const Cont = () => {
  return (
    <main id="cont-main">
      <ul className="text container">
        <li>
          <h3 className="cont-tit">Quick contact</h3>
          <ul>
            <li className="cont">
             <div> <i className="fa-solid fa-envelope"></i> Email:</div> 
              <a href="mailto:fnhernandorena@gmail.com" className="item cont-item">
                fnhernandorena@gmail.com
              </a>
            </li>
            <li className="cont">
            <div>  <i className="fa-brands fa-linkedin"></i> LinkedIn: </div>
              <a
                href="https://www.linkedin.com/in/francisco-nicolas-hernandorena-21b2a9294/"
                className="item cont-item"
              >
                Francisco Nicolas Hernandorena
              </a>
            </li>
            <li className="cont">
            <div>  <i className="fa-brands fa-instagram"></i> Instagram: </div>
              <a
                href="https://www.instagram.com/nico_hernandorenaa/"
                className="item cont-item"
              >
                Nico_hernandorenaa
              </a>
            </li>

            <li className="cont">
             <div> <i className="fa-brands fa-telegram"></i> Telegram: </div>
              <a href="https://t.me/Nico_Hernandorena" className="item cont-item">
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
