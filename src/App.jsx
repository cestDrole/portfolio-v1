import NavBar from "./components/NavBar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

const App = () => (
  <main className="relative">
    <NavBar />
    <section>
      <Hero />
    </section>
    <section>
      <AboutMe />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Contact />
    </section>
    <Footer />
  </main>
);

export default App;
