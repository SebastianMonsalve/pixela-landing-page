import { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const links = ['About', 'Portfolio', 'Blog', 'Career', 'Contact'];
  const [menuFixed, setMenuFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setMenuFixed(true);
      } else {
        setMenuFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${isMenuOpen ? ' open' : ''}${menuFixed ? ' fixed' : ''}`}>
      <div className='header-container'>
        <div className='logo-main-container'>
          <picture className='logo-container' onClick={() => scrollToTop()}>
            <img
              className='logo'
              src='/assets/pixela-logo-slogan-light.png'
              alt='website logo'
              width={'auto'}
              height={'auto'}
            />
          </picture>
          <div className='menu-icon' onClick={() => toggleMenu()}>
            <i className={`fa-solid fa-bars-staggered${isMenuOpen ? ' hidden' : ''}`}></i>
            <span className={`close-menu${isMenuOpen ? '' : ' hidden'}`}></span>
          </div>
        </div>
        <nav className={`menu-container${isMenuOpen ? ' open' : ''}`}>
          <ul className='menu'>
            {links.map((link, index) => (
              <li key={index} className='menu-item'>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <span className={`animate${isMenuOpen ? ' open' : ''}`}></span>
        <div className='options-container'>
          <div className='theme'></div>
          <a href='#' className='btn-circle secondary'>
            Hire Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
