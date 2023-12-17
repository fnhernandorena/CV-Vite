import "../../styles/pages.css";

const Info = () => {
  return (
    <main>
      <ul className="text">
        <li>
          <h3>About me</h3>
          <div className="sobremi">
            <img className="yop" src="../src/assets/yo1.jpg" alt="a pick of my face" />
            <p>
              I was born on February 14,2004 in the city of San Pedro, the city
              where i live. During the week i work, train, study and try to
              enjoy my family's as much time as possible, especially my
              grandparents. <br />
              I consider myself an efficient person, developing my activities in
              an organized manner. I am characterized by a healthy and
              passionate ambition, necessary to be learning and developing
              activities necessary to obtain the different goals that I propose.{" "}
              <br />
            </p>
          </div>
        </li>
        <li>
          <h3>My free time</h3>
          <p>
            I am a young man who loves being with family and surrounded by good
            friends. I play soccer and train for fun and health. <br />
            I enjoy buying, repairing and selling motorcycles. <br />
            Spend time outdoors connecting with nature and yourself. <br />
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Info;
