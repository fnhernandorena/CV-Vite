import { useEffect } from "react";

const ScrollChange = ({setMyId}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;

      if (windowWidth > 600) {
        if (scrollY > 200) {
          setMyId('float-nav');
        } else {
          setMyId('naveg');

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
