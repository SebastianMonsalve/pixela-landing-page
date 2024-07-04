import { useEffect } from 'react';
import './Carrusel.css';
import CarruselData from './carruselData';

const Carrusel = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.carrusel-container');

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.carrusel-list');
        const scrollerInnerContent = Array.from(scrollerInner.children);

        scrollerInnerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    addAnimation();
  }, []);

  return (
    <section className='carrusel'>
      <div className='carrusel-text-container'>
        <h3 className='section-title'>Worked with</h3>
        <h2 className='section-subtitle'>Trusted by +400 companies</h2>
      </div>
      <article className='carrusel-container'>
        <div className='carrusel-list'>
          {CarruselData.map((company, index) => {
            return (
              <picture key={index} className='carrusel-item'>
                <a href={company.link}>
                  <img
                    className='carrusel-img'
                    src={company.image}
                    alt={`Logo of ${company.name}`}
                    title={company.name}
                    loading='lazy'
                  />
                </a>
              </picture>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Carrusel;
