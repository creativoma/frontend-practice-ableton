import styles from './Hero.module.css';
import image from "../../assets/svg/logo-orange.svg";

const Hero = () => {
    return (
        <section id="heroElement" className={styles.container_hero}>  
            <img src={image} alt="Person testing Ableton" title="Learn more about Ableton" />
        </section>
    )
}

export default Hero;