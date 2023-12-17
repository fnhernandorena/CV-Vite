import "../../styles/pages.css";

const Est = () => {
  return (
    <main>
      <ul className="text">
        <li>
          <h3>Studi secondari</h3>
          <p>
            Nel 2022 mi sono diplomato come Perito Chimico presso l'Istituto
            Tecnico Superiore N°1. <br />
            Sono stati 7 anni di studio su doppi o tripli turni abbinati a
            laboratorio dal primo al terzo anno e dal quarto al settimo anno
            abbinato al laboratorio, considerato il migliore della zona. <br />
            <b>Certificati allegati:</b>{" "}
          </p>
          <img
            src="../src/assets/titulo_ind.jpg"
            alt="titulo educacion Secundaria"
          />
          <img
            src="../src/assets/tit_tecqui.jpg"
            alt="certificacion de tecnico quimico"
          />
        </li>

        <li>
          <h3>Programmazione</h3>
          <p>
            Per tutto il 2023 ho seguito il corso di sviluppo web front-end
            presso l'UTN. Capisco e utilizzo perfettamente HTML e CSS. <br />
            Inoltre, terminato il corso mi sono dedicato completamente a
            JavaScript, generando conoscenze sempre più avanzate <br />{" "}
          </p>
          <b>
            <i className="fa-brands fa-github"></i> Repository Github:
          </b>{" "}
          <br />
          <a href="https://github.com/fnhernandorena/CV" className="item">
            <i className="fa-solid fa-paperclip"></i> Repository del sito web del
            curriculum
          </a>{" "}
          <br />
          <ul>
            <li>
              <h3>JavaScript</h3>
              <p>
                In totale ho circa 300 ore di studio e pratica con il linguaggio
                di programmazione JavaScript. <br />
                Gestisco completamente concetti come variabili, array, funzioni
                in tutti i loro tipi, canvas, costruttori e altro.
              </p>
              <b className="tit">
                <i className="fa-brands fa-square-js"></i> Progetti JavaScript:
              </b>{" "}
              <br />
              <a
                href="../Javascript-proyects/divisioncuenta/cuenta.html"
                className="item"
              >
                <i className="fa-regular fa-clipboard"></i> Division de gastos!
                (solo in spagnolo)
              </a>
              <br />
              <a
                href="../Javascript-proyects/canvas 1.0/canvas1.0.html"
                className="item"
              >
                <i className="fa-solid fa-paintbrush"></i> Web paint con canvas!
                (compatibile solo con i computer)
              </a>
            </li>
            <li>
              <h3>React Native</h3>
              <p>
                Dopo aver imparato JavaScript, ho dedicato tutto il mio tempo a
                imparare a lavorare con React Native e in particolare con il
                framework "expo". <br />
                Circa 100 ore di studio e sviluppo di progetti
              </p>
              <b className="tit">
                <i className="fa-brands fa-react"></i> Progetti React Native:
              </b>{" "}
              <br />
              <a
                href="https://expo.dev/artifacts/eas/rp9knEiqMasKx9gK51oRCb.apk"
                className="item"
              >
                <i className="fa-solid fa-clock-rotate-left"></i> Contador (tipo
                pomodoro, APK android)
              </a>
              <br />
              <a
                href="https://expo.dev/artifacts/eas/hb6HaiH9Gaskyzvg6kzQwh.apk"
                className="item"
              >
                <i className="fa-solid fa-calculator"></i> Dividir Cuenta (APK
                Android)
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Desarrollo web Front-End</h3>
          <p>
            Presso l'UTN di Buenos Aires ho conseguito un diploma in sviluppo
            web full stack con react JS con un carico di lavoro di 187 ore.{" "}
            <br />
            Si è concluso con la creazione di una pagina web front-end
            completamente funzionale, con immagini, invio di moduli e
            connessioni al server. <br />
            <b>
              <i className="fa-brands fa-github"></i> Repository Github:
            </b>{" "}
            <br />
            <a
              href="https://github.com/fnhernandorena/archivos-diplo-dw"
              className="item"
            >
              <i className="fa-solid fa-paperclip"></i> Repository delle attività
              del diploma di sviluppo web Front-End
            </a>{" "}
            <br />
            <a
              href="https://github.com/fnhernandorena/trabajo-final-desarrollo-web"
              className="item"
            >
              <i className="fa-solid fa-paperclip"></i> Repository del lavoro finale
              per il diploma di sviluppo web Front-End
            </a>{" "}
            <br />
            <b>Certificato allegato:</b>
          </p>
          <img
            src="../src/assets/certdes.png"
            alt="certifidado de desarrollo web Front-End"
          />
        </li>
        <li>
          <h3>Progettazione grafica</h3>
          <p>
            Ho seguito il corso base di progettazione grafica presso l'UTN di
            Buenos Aires con un carico di lezioni di 87 ore, basato
            sull'utilizzo completo degli strumenti Adobe Photoshop e Adobe
            Illustrator.
            <br />
            <b>Certificato allegato:</b>
          </p>
          <img
            src="../src/assets/cretdis.png"
            alt="certificado de diseño grafico"
          />
        </li>
        <li>
          {" "}
          <h3>Lingue</h3>
          <ul>
            {" "}
            <li>
              <h4>Inglese</h4>
              <p>
                Ho studiato inglese per 5 anni presso l'Istituto "De Analia".{" "}
                <br />
                Al momento ho un'ottima padronanza della lingua, anche se
                normalmente non la uso quotidianamente.
                <br />
                <b>Certificati allegati:</b>
              </p>
              <img
                src="../src/assets/certing.jpg"
                alt="certificado de 3er grado de ingles"
              />
              <img
                src="../src/assets/certing2.jpg"
                alt="certifidaco de 1er año de ingles"
              />
            </li>
            <li>
              <h4>Italiano</h4>
              <p>
                All'inizio del 2023 ho iniziato a studiare italiano, presso la
                Società Italiana della mia città. Oggi continuo con il corso e
                faccio progressi nel mio apprendimento.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
};

export default Est;
