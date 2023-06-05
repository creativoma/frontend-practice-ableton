// Styles
import styles from "./Footer.module.css";

// Assets
import logo from "../../assets/svg/logo.svg";
import simbolo from "/favicon.svg";
import iconFacebook from "../../assets/svg/facebook.svg";
import iconTwitter from "../../assets/svg/twitter.svg";
import iconYoutube from "../../assets/svg/youtube.svg";
import iconInstagram from "../../assets/svg/instagram.svg";

const Footer = () => {
  return (
    <footer>
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
          <li>Register Live or Push &gt;</li>
          <li>About Ableton &gt;</li>
          <li>Jobs &gt;</li>
          <li>
            <div className={styles.rrss}>
              <img src={iconFacebook} alt="Facebook" title="Facebook" />
              <img src={iconTwitter} alt="Twitter" title="Twitter" />
              <img src={iconYoutube} alt="Youtube" title="Youtube" />
              <img src={iconInstagram} alt="Instagram" title="Instagram" />
            </div>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <h2>Education</h2>
          </li>
          <li>Offers for students and teachers &gt;</li>
          <li>Ableton for the Classroom &gt;</li>
          <li>Ableton for Colleges and Universities &gt;</li>
        </ul>
        <ul>
          <li>
            <h2>Sign up to our newsletter</h2>
          </li>
          <li>
            <p>
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>
          </li>
          <li>
            <form className={styles.newsletter} action="">
              <input type="email" placeholder="Email Address" />
              <input type="submit" value="Sign Up" />
            </form>
          </li>
        </ul>
      </div>
      <div className={styles.container_ul}>
        <ul>
          <li>
            <h2>Community</h2>
          </li>
          <li>Find Ableton User Groups &gt;</li>
          <li>Find Certified Training &gt;</li>
          <li>Become a Certified Trainer &gt;</li>
        </ul>
        <ul>
          <li>
            <h2>Language and Location</h2>
          </li>
          <li>
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
          </li>
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
    </footer>
  );
};

export default Footer;
