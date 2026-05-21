import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

import Certification from "./pages/Certification";

function Home() {
  return (
    <div className="bg-[#020617] text-white overflow-hidden">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Certification Page */}
      <Route
        path="/certification"
        element={
          <>
            <Navbar />
            <Certification />
          </>
        }
      />

    </Routes>
  );
}

export default App;