import { useEffect } from "react";
import styles from "./Header.module.css";
import simbolo from "/favicon.svg";

const Header = () => {

  useEffect(() => {

    const elementParent = document.getElementById("elementParent");
    const heightElementParent = elementParent.offsetHeight;
    const widthElementParent = elementParent.offsetWidth;

    const fixedMenu = document.getElementById("fixedMenu");
    const heightElement = fixedMenu.offsetHeight;
    const heroElement = document.getElementById("heroElement");
    
    const scrollReset = 0;
    const scrollEnd = 800;
    let lastScrollTop = 0;

    

    const scrollFunction = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        scrollDownFunction();
      } else {
        scrollUpFunction();
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };


    const scrollDownFunction = () => {
      if (window.scrollY < heightElementParent) {
        fixedMenu.style.transition = "none";
        fixedMenu.style.transform = "translateY(0px)";
        fixedMenu.style.position = "relative";
        heroElement.style.marginTop = `${scrollReset}px`;
      } else if (window.scrollY > heightElementParent && window.scrollY < scrollEnd) {
        fixedMenu.style.transition = "none";
        fixedMenu.style.transform = `translateY(-${heightElementParent}px)`;
        fixedMenu.style.position = "fixed";
        fixedMenu.style.width = `${widthElementParent}px`;
        heroElement.style.marginTop = `${heightElement}px`;
      } else if (window.scrollY > scrollEnd) {
        fixedMenu.style.transition = "all 150ms ease";
        fixedMenu.style.transform = `translateY(-${heightElementParent*2}px)`;
      }
    };

    const scrollUpFunction = () => {
      if (window.scrollY < heightElementParent) {
        fixedMenu.style.transition = "none";
        fixedMenu.style.transform = "translateY(0px)";
        fixedMenu.style.position = "relative";
        heroElement.style.marginTop = `${scrollReset}px`;
      } else if (window.scrollY > heightElementParent && window.scrollY < scrollEnd) {
        fixedMenu.style.transition = "all 150ms ease";
        fixedMenu.style.transform = `translateY(-${heightElementParent}px)`;
        fixedMenu.style.position = "fixed";
        fixedMenu.style.width = `${widthElementParent}px`;
        heroElement.style.marginTop = `${heightElement}px`;
      } else if (window.scrollY > scrollEnd) {
        fixedMenu.style.transition = "all 150ms ease";
        fixedMenu.style.transform = `translateY(-${heightElementParent*2}px)`;
      }
    };


    window.addEventListener("scroll", scrollFunction);


  }, []);
  return (
    <header>
      <div id="elementParent" className={styles.container_main}>
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
        <ul className={styles.ul_secondary}>
          <li>Log in or register</li>
          <li>Try Live for free</li>
        </ul>
      </div>
      <div id="fixedMenu" className={styles.container_secondary}>
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>Apprenticeships</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;