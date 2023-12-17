import "../../styles/pages.css";

const Work = () => {
  return (
    <main>
      <ul className="text">
        <li>
          <h3>Mecánica de motos y atención al público</h3>
          <div className="work-exp">
            Desde el año 2020 trabajo en "Power motos". Me desempeño,
            principalmente, en el arreglo de motos de hasta 400 cc. <br />
            A su vez, ocupo el puesto en atención al cliente, asesorando en la
            compra de repuestos y accesorios. <br />
            Como extra, compro motos, las reparo y las vendo. <br />
            <b>
              {" "}
              <i className="fa-solid fa-paperclip"></i> Referancia comprobable:
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
          <h3>Atención al público y gestión de ventas</h3>
          <div className="work-exp">
            Durante la pandemia, trabajé en el negocio de mi abuelo como asesor
            de marketing y ventas online. <br />
            <b>
              {" "}
              <i className="fa-solid fa-paperclip"></i> Referancia comprobable:
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
