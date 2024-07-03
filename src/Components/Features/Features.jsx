import './Features.css';

const Features = () => {
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
        <article className='feature-card'>
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
            <span className='count-text'>01</span>
          </div>
          <picture className='feature-card-image'>
            <img
              src='https://designmonks.co/wp-content/plugins/designmonks-core/Includes/Widgets/images/service.png'
              decoding='async'
              title='Team collaboration'
              alt='Team collaboration image'
              loading='lazy'
            />
          </picture>
          <div className='feature-card-text'>
            <h4 className='h4 feature-card-title'>Integrated team collaboration</h4>
            <p className='feature-card-description'>
              Design Monks isn't just another agency; we seamlessly blend with your team. We dive deep into your
              company's culture, understand the essence of your products, and engage closely with your customer base.
              Our partnership is more than a collaboration; it's a fusion of our expertise with your vision.
            </p>
          </div>
        </article>
        <article className='feature-card layout-odd'>
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
            <span className='count-text'>01</span>
          </div>
          <picture className='feature-card-image'>
            <img
              src='https://designmonks.co/wp-content/plugins/designmonks-core/Includes/Widgets/images/service.png'
              decoding='async'
              title='Team collaboration'
              alt='Team collaboration image'
              loading='lazy'
            />
          </picture>
          <div className='feature-card-text'>
            <h4 className='h4 feature-card-title'>Integrated team collaboration</h4>
            <p className='feature-card-description'>
              Design Monks isn't just another agency; we seamlessly blend with your team. We dive deep into your
              company's culture, understand the essence of your products, and engage closely with your customer base.
              Our partnership is more than a collaboration; it's a fusion of our expertise with your vision.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Features;
