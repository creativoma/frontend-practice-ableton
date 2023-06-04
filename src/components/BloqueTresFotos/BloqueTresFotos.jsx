import styles from "./BloqueTresFotos.module.css";
import PropTypes from "prop-types";

const BloqueDosFotos = (props) => {
  const { img1, img2, img3, title, alt, color} = props;

  return (
    // A section le pasamos dos clases.. una es bloque_dos_fotos y la otra es el valor que trae la prop color
    <section className={`${styles.bloque_tres_fotos} ${styles[color]}`}>
      <div className={styles.dos_fotos}>
        <img src={img1} alt={alt} title={title} />
        <img src={img2} alt={alt} title={title} />
      </div>
      <div>
        <img src={img3} alt={alt} title={title} />
      </div>
    </section>
  );
};

BloqueDosFotos.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default BloqueDosFotos;
