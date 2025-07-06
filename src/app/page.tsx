import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseEffects from './components/MouseEffects';
import TechOrbit from './components/TechOrbit';
import ScriptEffects  from './components/ScriptEffects';

export default function Home() {
  return (
    <>
      <Header />
      <MouseEffects />
      <TechOrbit />
      <ScriptEffects />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}