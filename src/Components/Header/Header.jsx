import './Header.css';

const Header = () => {
  return (
    <header>
      <picture className='logo-container'>
        <source srcSet='/assets/pixela-logo-no-bg.png' media='(max-width: 580px)' />
        <img
          className='logo'
          src='/assets/pixela-logo-slogan-light.png'
          alt='website logo'
          width={'auto'}
          height={'auto'}
        />
      </picture>
      <nav className='menu-container'>
        <ul className='menu'>
          <li className='menu-item'>
            <a href='#'>About</a>
          </li>
          <li className='menu-item'>
            <a href='#'>Portfolio</a>
          </li>
          <li className='menu-item'>
            <a href='#'>Blog</a>
          </li>
          <li className='menu-item'>
            <a href='#'>Career</a>
          </li>
          <li className='menu-item'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className='options-container'>
        <div className='theme'></div>
        <button className='btn-circle secondary'>Hire Us</button>
      </div>
    </header>
  );
};

export default Header;
