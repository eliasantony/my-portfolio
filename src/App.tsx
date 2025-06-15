import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import your sections
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedProjects from './sections/FeaturedProjects';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';


function App() {
  return (
    <div className="bg-dark-100">
      <Navbar />
      <main>
      <Hero />
        <About />
        <FeaturedProjects />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App