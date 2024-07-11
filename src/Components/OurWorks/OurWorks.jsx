import './OurWorks.css';
import OurWorksData from './OurWorksData';

const OurWorks = () => {
  return (
    <section className='works'>
      <article className='works-title-container'>
        <div className='works-titles'>
          <h2 className='section-title'>Our Works</h2>
          <h3 className='section-subtitle works-subtitle'>Case studies</h3>
        </div>
        <div className='works-descriptions'>
          <p className='works-description'>
            Well-crafted development and design solutions are essential present products that your audience will fall in
            love with
          </p>
        </div>
      </article>
      <article className='works-card-container'>
        {OurWorksData.map((work, index) => {
          const cardClassName = index % 2 === 0 ? 'works-card' : 'works-card works-card-reverse';
          return (
            <div key={index} className={cardClassName}>
              <picture className='works-card-image'>
                <img src={work.image} alt={work.title} draggable='false' loading='lazy' />
                <a href={work.link} target='_blank' title='View demo'>
                  <span>Explore</span>
                </a>
              </picture>
              <div className='works-card-content'>
                <div className='works-card-category'>
                  {work.category.map((category, index) => (
                    <p key={index}>{category}</p>
                  ))}
                </div>
                <div className='works-card-text'>
                  <a href={work.link}>
                    <h4 className='works-card-title'>{work.title}</h4>
                  </a>
                  <p className='works-card-description'>{work.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </article>
      <a href='/portfolio' className='works-button'>
        See All Cases
      </a>
    </section>
  );
};

export default OurWorks;
