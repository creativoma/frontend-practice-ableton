import styles from "./FotoCentro.module.css";
import PropTypes from "prop-types";

const FotoCentro = (props) => {
  const { img, title, alt } = props;

  return (
    <section className={styles.container_foto_centro}>
      <img src={img} alt={alt} title={title} />
    </section>
  );
};

FotoCentro.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FotoCentro;
