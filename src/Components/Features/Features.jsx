import './Features.css';
import FeatureData from './featuresData';

const Features = () => {
  const translateFeatureData = (data) => {
    return data;
  };

  const Features = translateFeatureData(FeatureData);
  return (
    <section className='features'>
      <div className='feature-text-container'>
        <h3 className='section-title'>Why choose us</h3>
        <h2 className='section-subtitle feature-text'>4 reasons to partner with us</h2>
        <p className='section-description feature-text'>
          We're not just about design; we're your partners in crafting digital experiences that blend innovation with
          functionality. Let's team up to shape a future where design bridges your visions and reality.
        </p>
      </div>
      <div className='feature-cards-container'>
        {Features.map((feature, index) => {
          return (
            <article key={index} className={`feature-card ${index === 1 || index === 2 ? 'layout-odd' : ''}`}>
              <div className='box-count'>
                <svg xmlns='http://www.w3.org/2000/svg' width='49' height='58' viewBox='0 0 49 58' fill='none'>
                  <ellipse
                    cx='24.524'
                    cy='28.9095'
                    rx='23'
                    ry='30'
                    transform='rotate(25 24.524 28.9095)'
                    fill='#272635'
                  ></ellipse>
                </svg>
                <span className='count-text'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
              </div>
              <picture className='feature-card-image'>
                <img
                  src={feature.image}
                  decoding='async'
                  title={feature.title}
                  alt={`${feature.title} image`}
                  loading='lazy'
                />
              </picture>
              <div className='feature-card-text'>
                <h4 className='h4 feature-card-title'>{feature.title}</h4>
                <p className='feature-card-description'>{feature.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
