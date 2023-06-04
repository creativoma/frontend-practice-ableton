import { useEffect, useState } from "react";
import styles from "./VideoCentro.module.css";
import PropTypes from "prop-types";

function VideoCentro(props) {

  const { video, detalle, portada } = props;
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const img = document.querySelector(`.${styles.videoCentro} img`);

    img.addEventListener("click", () => {
      img.style.display = "none";
      setPlay(true);
    });
  }, [video]);

  return (
    <section className={styles.videoCentro}>
      <div>
        {portada && (
          <>
            <img src={portada} alt={detalle} />
          </>
        )}
        {play && (
          <>
            <iframe
              width="100%"
              height="100%"
              src={video}
              title={detalle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </>
        )}
      </div>
      <p>Why Ableton - Juanpe Bolivar</p>
    </section>
  );
}

VideoCentro.propTypes = {
  video: PropTypes.string.isRequired,
  detalle: PropTypes.string.isRequired,
  portada: PropTypes.string.isRequired,
};


export default VideoCentro;
