// Components
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import BloqueTexto from "./components/BloqueTexto/BloqueTexto.jsx";
import BloqueDosFotos from "./components/BloqueDosFotos/BloqueDosFotos.jsx";
import BloqueTresFotos from "./components/BloqueTresFotos/BloqueTresFotos.jsx";
import FotoCentro from "./components/FotoCentro/FotoCentro.jsx";
import VideoCentro from "./components/VideoCentro/VideoCentro.jsx";

// Assets
import img1 from "./assets/images/teclado.jpeg";
import img2 from "./assets/images/mujer-caminando.jpeg";
import img3 from "./assets/images/hombre-pizarra.jpeg";
import img4 from "./assets/images/cartel.jpeg";
import img5 from "./assets/images/estudio.jpeg";
import img6 from "./assets/images/software.jpeg";
import img7 from "./assets/images/portada.jpeg";

// Styles
import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <BloqueTexto
        titulo="We make <a href='#'>Live</a>, <a href='#'>Push</a> and <a href='#'>Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things."
        texto="Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world."
      />
      <BloqueDosFotos
        img1={img1}
        img2={img2}
        title="Ableton"
        alt="Ableton"
        color="yellow"
      />
      <BloqueTexto
        titulo="Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding."
        texto="We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."
      />
      <VideoCentro portada={img7} video="https://www.youtube.com/embed/9SbnhgjeyXA?autoplay=1" detalle="Ableton" />
      <BloqueTexto
        titulo="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo."
        texto="Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture."
      />
      <BloqueTresFotos
        img1={img3}
        img2={img4}
        img3={img5}
        title="Ableton"
        alt="Ableton"
        color="green"
      />
      <BloqueTexto
        titulo="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
        texto="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."
      />
      <FotoCentro img={img6} title="Ableton" alt="Ableton" />
      <BloqueTexto
        titulo="We’re passionate about what we do, but we’re equally passionate about improving who we are."
        texto="We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.<br><br>Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices."
      />
      <Footer />
    </main>
  );
}

export default App;
