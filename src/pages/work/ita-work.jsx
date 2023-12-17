import "../../styles/pages.css";

const Work = () => {
  return (
    <main>
      <ul className="text">
        <li>
          <h3>Meccanici motociclistici e assistenza clienti</h3>
          <div className="work-exp">
            Dal 2020 lavoro presso "Power motos", lavoro, Principalmente nella
            riparazione di motocicli fino a 400 cc. <br />
            Allo stesso tempo, ricopro la posizione nel servizio clienti,
            fornendo consulenza su acquisto di ricambi e accessori. <br />
            In più compro motociclette, le riparo e le vendo. <br />
            <b>
              {" "}
              <i className="fa-solid fa-paperclip"></i> Riferimento verificabile:
            </b>{" "}
            <br />
            <div>
              Email:{" "}
              <a href="mailto:pablodelpardo9@gmail.com" className="item">
                pablodelpardo9@gmail.com
              </a>
            </div>
          </div>
        </li>
        <li>
          <h3>Servizio clienti e gestione delle vendite</h3>
          <div className="work-exp">
            Durante la pandemia ho lavorato presso l'azienda di mio nonno come
            consulente di vendite e marketing online. <br />
            <b>
              {" "}
              <i className="fa-solid fa-paperclip"></i> Riferimento verificabile:
            </b>{" "}
            <br />
            <div>
              {" "}
              Whatsapp:{" "}
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2Fztvna4&e=AT2yQx4ipi2ySBhMHjdtahjYiMy8yvS6CAP1vzziu9LjMP9e8mD55tviJKlfH0HkiSGAfVyFwH9D9AnUZAYpAOkQnAy0DMprCcY7tg"
                className="item"
              >
                "El mundo de el mueble"
              </a>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Work;
