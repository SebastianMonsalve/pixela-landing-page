import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const links = [
    {
      name: 'About',
      path: '#about',
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
    },
    {
      name: 'Blog',
      path: '/',
    },
    {
      name: 'Career',
      path: '/',
    },
    {
      name: 'Contact',
      path: '/',
    },
  ];
  const [menuFixed, setMenuFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const scrollPosition = window.scrollY;

  const imageTitle = scrollPosition == 0 ? 'Go back to home' : 'Go to top of page';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  console.log(scrollPosition);

  const handleRedirect = () => {
    if (scrollPosition <= 49) {
      navigate('/');
    } else {
      scrollToTop();
    }
  };

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

  const getPath = () => {
    const path = window.location.pathname;
    return path === '/' ? 'home' : path;
  };

  return (
    <header className={`header${isMenuOpen ? ' open' : ''}${menuFixed ? ' fixed' : ''}`}>
      <div className='header-container'>
        <div className='logo-main-container'>
          <picture className='logo-container' onClick={() => handleRedirect()} title={imageTitle}>
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
                <a className={`${link.path == getPath() ? 'active' : ''}`} href={link.path}>
                  {link.name}
                </a>
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
