import styles from "./Header.module.css";
import simbolo from "/favicon.svg";
import { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Header = () => {
  const refMenuMain = useRef(null);
  const refMenuDetails = useRef(null);
  const refMenuSecondary = useRef(null);

  useEffect(() => {
    const lastLi = refMenuMain.current.querySelector("ul li:last-child");

    lastLi.addEventListener("click", () => {
      if (refMenuDetails.current.style.display === "none") {
        lastLi.innerHTML = "More -";
        refMenuDetails.current.style.display = "block";
      } else {
        refMenuDetails.current.style.display = "none";
        lastLi.innerHTML = "More +";
      }
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: refMenuSecondary,
    offset: ["start start", "end start"],
    initial: 0,
  });
  const position = useTransform(scrollYProgress, (value) => {
    if (value === 0) {
      return "relative";
    } else if (value === 1) {
      return "fixed";
    } else {
      return "relative";
    }
  });
  const top = useTransform(scrollYProgress, [0, 1], ["auto", "0px"]);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY.get() > scrollY.getPrevious() && scrollY.get() > 500) {
      setHidden(true);
    } else if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
    }
  }

  useEffect(() => {
    const unsubscribe = scrollY.on("change", update);
    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 100 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <header>
      <div className={styles.container_main} ref={refMenuMain}>
        <img
          src={simbolo}
          alt="Logo de Ableton"
          title="Ableton"
          width={100}
          height="auto"
        />
        <ul className={styles.ul_first}>
          <li>Live</li>
          <li>Push</li>
          <li>Note</li>
          <li>Link</li>
          <li>Shop</li>
          <li>Packs</li>
          <li>Help</li>
          <li>More +</li>
        </ul>
        <ul className={styles.ul_secondary} >
          <li>Log in or register</li>
          <li>Try Live for free</li>
        </ul>
      </div>
      <div className={styles.container_extra} ref={refMenuDetails}>
        <div>
          <h2>More on Ableton.com:</h2>
          <ul>
            <li>Blog</li>
            <li>Ableton for the Classroom</li>
            <li>Ableton for Colleges and Universities</li>
            <li>Certified Training</li>
            <li>About Ableton</li>
            <li>Jobs</li>
            <li>Apprenticeships</li>
          </ul>
        </div>
      </div>
      <motion.div
        className={styles.container_secondary}
        ref={refMenuSecondary}
        style={{ position, top }}
        animate={hidden ? "hidden" : "visible"}
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>Apprenticeships</li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
