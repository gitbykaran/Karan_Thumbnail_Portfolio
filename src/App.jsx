import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projectsv from './sections/Projects-Video/Projectsv';
import Projectst from './sections/Projects-Thumbnails/Projectst';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Projectsv />
      <Projectst/>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
