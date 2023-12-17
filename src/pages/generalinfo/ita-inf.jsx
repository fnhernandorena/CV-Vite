import "../../styles/pages.css";

const Info = () => {
  return (
    <main>
      <ul className="text">
        <li>
          <h3>Su di me</h3>
          <div className="sobremi">
            <img className="yop" src="../src/assets/yo1.jpg" alt="una foto de mi cara" />
            <p>
              Sono nato il 14 febbraio 2004 nella città di San Pedro, la città
              in cui vivo. Durante la settimana lavoro, mi alleno, studio e
              cerco di trascorrere più tempo possibile con la mia famiglia, in
              particolare con i miei nonni. <br />
              Mi considero una persona efficiente, sviluppando le mie attività
              in modo organizzato. Mi caratterizza una sana ed appassionata
              ambizione, necessaria per apprendere e sviluppare attività
              necessarie al raggiungimento dei diversi obiettivi che mi sono
              prefissato. <br />
            </p>
          </div>
        </li>
        <li>
          <h3>Il mio tempo libero</h3>
          <p>
            Sono un giovane che ama stare con la famiglia e circondato da buoni
            amici. Gioco a calcio e mi alleno per divertimento e salute. <br />
            Mi piace comprare, riparare e vendere motociclette. <br />
            Trascorri del tempo all'aria aperta connettendoti con la natura e te
            stesso. <br />
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Info;
