import { Link } from 'react-scroll';
import Section from '../components/Section';
import memoji from '../assets/memoji.png';

const Hero = () => (
  <Section id="hero" className="flex items-center justify-center min-h-screen bg-black text-white text-center">
    <div>
      <div className="mx-auto mb-8 mt-8 w-80 h-80 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
        <img src={memoji} alt="Elias Memoji" className="w-full h-full object-contain" />
      </div>
      <h1 className="text-6xl font-extrabold mb-6">
        <span className="relative inline-block text-accent">
          <span className="absolute inset-0 animate-pulse opacity-50 bg-accent rounded-full blur-lg"></span>
          Creative
        </span> Developer &amp; <span className="text-accent">Engineer</span>
      </h1>
      <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto">
        Exploring creative ways to build with Apps and Webpages, one project at a time.
      </p>
      <Link to="projects" smooth duration={500} offset={-70}>
        <button >See Projects</button>
      </Link>
    </div>
  </Section>
);

export default Hero;