import NavBar from "./components/NavBar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

const App = () => (
  <main className='relative'>
    <NavBar />
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

export default App;
