import './Carrusel.css';

const Carrusel = () => {
  return (
    <section className='carrusel'>
      <div className='carrusel-text-container'>
        <h3 className='section-title'>Worked with</h3>
        <h2 className='section-subtitle'>Trusted by +400 companies</h2>
      </div>
      <article
        className='carrusel-container'
        style={{ '--width': '120px', '--height': '50px', '--quantity': 9, '--animation-time': '20s' }}
      >
        <div className='carrusel-list'>
          <picture className='carrusel-item' style={{ '--position': 1 }}>
            <a href='#'>
              <img
                src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png'
                alt=''
              />
            </a>
          </picture>
          <picture className='carrusel-item' style={{ '--position': 2 }}>
            <a href='#'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png'
                alt=''
              />
            </a>
          </picture>
          <picture className='carrusel-item' style={{ '--position': 3 }}>
            <a href='#'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Duolingo_logo.svg/1024px-Duolingo_logo.svg.png'
                alt=''
              />
            </a>
          </picture>
          <picture className='carrusel-item' style={{ '--position': 4 }}>
            <a href='#'>
              <img
                src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png'
                alt=''
              />
            </a>
          </picture>
          <picture className='carrusel-item' style={{ '--position': 5 }}>
            <a href='#'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png'
                alt=''
              />
            </a>
          </picture>
          <picture className='carrusel-item' style={{ '--position': 6 }}>
            <a href='#'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Duolingo_logo.svg/1024px-Duolingo_logo.svg.png'
                alt=''
              />
            </a>
          </picture>
          <picture className='carrusel-item' style={{ '--position': 7 }}>
            <a href='#'>
              <img
                src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png'
                alt=''
              />
            </a>
          </picture>
          <picture className='carrusel-item' style={{ '--position': 8 }}>
            <a href='#'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png'
                alt=''
              />
            </a>
          </picture>
          <picture className='carrusel-item' style={{ '--position': 9 }}>
            <a href='#'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Duolingo_logo.svg/1024px-Duolingo_logo.svg.png'
                alt=''
              />
            </a>
          </picture>
        </div>
      </article>
    </section>
  );
};

export default Carrusel;
