import style from "./BloqueTexto.module.css";
import purify from "dompurify";
import PropTypes from "prop-types";

const BloqueTexto = (props) => {
  const { titulo, texto } = props;

  return (
    <section className={style.bloqueTexto}>
      <h2 dangerouslySetInnerHTML={{ __html: purify.sanitize(titulo) }}></h2>
      <p dangerouslySetInnerHTML={{ __html: purify.sanitize(texto) }}></p>
    </section>
  );
};

BloqueTexto.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default BloqueTexto;