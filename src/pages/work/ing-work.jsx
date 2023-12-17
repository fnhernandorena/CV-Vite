import "../../styles/pages.css";

const Work = () => {
  return (
    <main>
      <ul className="text">
        <li>
          <h3>Motorcycle mechanics and customer service</h3>
          <div className="work-exp">
            Since 2020 I have been working at "Power motos". I work, Mainly, in
            the repair of motorcycles up to 400 cc. <br />
            At the same time, I hold the position in customer service, advising
            on the purchase of spare parts and accessories. <br />
            As an extra, I buy motorcycles, repair them and sell them. <br />
            <b>
              {" "}
              <i className="fa-solid fa-paperclip"></i> Verifiable reference:
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
          <h3>Customer service and sales management</h3>
          <div className="work-exp">
            During the pandemic, I worked at my grandfather's business as an
            online sales and marketing consultant. <br />
            <b>
              {" "}
              <i className="fa-solid fa-paperclip"></i> Verifiable reference:
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
