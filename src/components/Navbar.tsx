import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'FoodFellas', to: 'foodfellas' },
  { name: 'Knot', to: 'knot' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[80%] max-w-6xl z-50 transition-all duration-300 rounded-xl
      ${hasScrolled ? 'glass shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold cursor-pointer text-white">
              Elias Antony
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust offset for fixed navbar
                  className="text-gray-300 hover:bg-dark-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                  activeClass="text-accent"
                  spy={true}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-dark-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-250} // Adjust offset for mobile navbar height
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-dark-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                activeClass="text-accent bg-dark-200"
                spy={true}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;