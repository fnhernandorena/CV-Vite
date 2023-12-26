import { useEffect } from "react";

const ScrollChange = ({setMyId}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;
      const nav = document.getElementById("float-nav")

      if (windowWidth > 600) {
        if (scrollY > 200) {
          nav.style.visibility = "visible";
          nav.style.opacity = 1;
        } else {
          nav.style.visibility = "hidden";
          nav.style.opacity = 0;

        }
      };
    };

    
    if (window.innerWidth > 600) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default ScrollChange;
