import NavBar from "./components/NavBar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import MobileNavBar from "./components/MobileNavBar";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <main className='relative'>
      <NavBar status={toggle} setToggle={setToggle} />
      <MobileNavBar status={toggle} setToggle={setToggle} />
      <section id='home'>
        <Hero />
      </section>
      <section id='about-me'>
        <AboutMe />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact-me'>
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default App;
