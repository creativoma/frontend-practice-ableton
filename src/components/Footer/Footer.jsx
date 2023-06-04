// Styles
import styles from "./Footer.module.css";
import { easeOut, motion, useInView } from "framer-motion";
import { useRef } from "react";

// Assets
import logo from "../../assets/svg/logo.svg";
import simbolo from "/favicon.svg";
import iconFacebook from "../../assets/svg/facebook.svg";
import iconTwitter from "../../assets/svg/twitter.svg";
import iconYoutube from "../../assets/svg/youtube.svg";
import iconInstagram from "../../assets/svg/instagram.svg";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.footer
      ref={ref}
      initial={{ transform: "translateY(10px)", opacity: 0 }}
      animate={
        isInView
          ? { transform: "translateY(0)", opacity: 1 }
          : { transform: "translateY(10px)", opacity: 0 }
      }
      transition={
        isInView
          ? { duration: 0.85, delay:0.250, ease: easeOut }
          : { duration: 0, ease: easeOut }
      }
    >
      <img
        className={styles.logo}
        src={logo}
        alt="Logo Ableton"
        title="Ableton"
        width={100}
        height="auto"
      />
      <div className={styles.container_ul}>
        <ul>
          <li>Register Live or Push</li>
          <li>About Ableton</li>
          <li>Jobs</li>
          <div className={styles.rrss}>
            <img src={iconFacebook} alt="Facebook" title="Facebook" />
            <img src={iconTwitter} alt="Twitter" title="Twitter" />
            <img src={iconYoutube} alt="Youtube" title="Youtube" />
            <img src={iconInstagram} alt="Instagram" title="Instagram" />
          </div>
        </ul>
        <ul>
          <h4>Education</h4>
          <li>Offers for students and teachers</li>
          <li>Ableton for the Classroom</li>
          <li>Ableton for Colleges and Universities</li>
        </ul>
        <ul>
          <h4>Sign up to our newsletter</h4>
          <p>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <form className={styles.newsletter} action="">
            <input type="email" placeholder="Email Address" />
            <input type="submit" value="Sign Up" />
          </form>
        </ul>
      </div>
      <div className={styles.container_ul}>
        <ul>
          <h4>Community</h4>
          <li>Find Ableton User Groups</li>
          <li>Find Certified Training</li>
          <li>Become a Certified Trainer</li>
        </ul>
        <ul>
          <h4>Language and Location</h4>
          <form className={styles.selectores} action="">
            <select>
              <option value="EN">English</option>
              <option value="ES">Español</option>
            </select>
            <select>
              <option value="Spain">España</option>
              <option value="United States">United States</option>
            </select>
          </form>
        </ul>
      </div>
      <div className={styles.container_ul_final}>
        <ul>
          <li>Contact Us</li>
          <li>Press Resources</li>
          <li>Legal Info</li>
          <li>Privacy Policy</li>
          <li>Cookie Setting</li>
          <li>Imprint</li>
        </ul>
        <div className={styles.autor}>
          <p>Made in Berlin</p>
          <img
            className={styles.simbolo}
            src={simbolo}
            alt="Logo Ableton"
            title="Ableton"
            width={100}
            height="auto"
          />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
