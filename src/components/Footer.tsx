import { animateScroll as scroll } from 'react-scroll';
import { ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="bg-dark-200 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Elias Antony – Made with React + Vite
        </p>
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full hover:bg-dark-300 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="h-6 w-6 text-gray-400" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;