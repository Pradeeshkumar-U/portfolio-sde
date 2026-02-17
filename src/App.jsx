import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-amber-500 selection:text-black font-sans">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="bg-zinc-900 py-8 text-center border-t border-zinc-800">
        <p className="text-zinc-500 text-sm">
          Designed & Built by <span className="text-zinc-300">Pradeeshkumar U</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
