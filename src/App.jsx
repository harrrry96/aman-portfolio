import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from "./components/Education";
function App() {
  return (
    <div className="bg-[#020617] text-white overflow-hidden">

      <>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Education />
  <Contact />
</>

    </div>
  )
}

export default App