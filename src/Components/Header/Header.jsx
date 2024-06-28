import { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const links = ['About', 'Portfolio', 'Blog', 'Career', 'Contact'];
  const [menuFixed, setMenuFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setMenuFixed(true);
      } else {
        setMenuFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMenuOpen = false;

  return (
    <header className={`header${menuFixed ? ' fixed' : ''}`}>
      <div className='header-container'>
        <picture className='logo-container'>
          <img
            className='logo'
            src='/assets/pixela-logo-slogan-light.png'
            alt='website logo'
            width={'auto'}
            height={'auto'}
          />
        </picture>
        <div className='menu-icon'>
          <i className={`fa-solid fa-bars-staggered${isMenuOpen ? ' hidden' : ''}`}></i>
          <span className={`close-menu${isMenuOpen ? '' : ' hidden'}`}></span>
        </div>
        <nav className='menu-container'>
          <ul className='menu'>
            {links.map((link, index) => (
              <li key={index} className='menu-item'>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
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
