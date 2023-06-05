import style from "./BloqueTexto.module.css";
import purify from "dompurify";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BloqueTexto = (props) => {
  const { titulo, texto } = props;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 75%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(5px)", "blur(0px)"]
  );
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    ["translateY(-200px)", "translateY(0px)"]
  );

  return (
    <div>
      <section
        ref={ref}
        className={style.bloqueTexto}
        // style={{ border: "2px solid red" }}
      >
        <motion.h2
          style={{ opacity, scale, filter, transform }}
          dangerouslySetInnerHTML={{ __html: purify.sanitize(titulo) }}
        ></motion.h2>
        <motion.p
        style={{ opacity, scale, filter, transform }}
        dangerouslySetInnerHTML={{ __html: purify.sanitize(texto) }}></motion.p>
      </section>
    </div>
  );
};

BloqueTexto.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default BloqueTexto;
