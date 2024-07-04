import './About.css';

const About = () => {
  return (
    <section className='about'>
      <article className='about-container'>
        <div className='about-title-container'>
          <h3 className='section-title'>About Us</h3>
          <h2 className='section-subtitle'>How Colleagues Turn Into Co-Founders of Design Monks</h2>
        </div>
        <article className='about-content'>
          <picture className='about-image'>
            <img src='https://designmonks.co/wp-content/uploads/2024/06/Frame-569.png' alt='Image' loading='lazy' />
          </picture>
          <div className='about-text-container'>
            <p>
              Meet <a href='#'>Sebastian</a> and <a href='#'>Fredy</a>, the brains behind Design Monks. Their journey
              started as colleagues. Their barrier as typical colleagues' relationships broke when they found
              similarities in their design thinking, determination, and future goals.
            </p>
            <p>
              It was 2021 when they were working on the same project and once they finished it, Atiq popped the question
              to Noman, “How about we start our own thing?” They didn't take longer to find Design Monks.
            </p>
            <p>
              Before founding Design Monks, Atiq and Noman worked together for eight years on big-head companies like
              Viber, Samsung, Pepsi, Autogrill, Laderach, Banglalink, Robi, Swisscom, Telenor, Zantrik, Akij Group,
              IDLC, Swisslife, and Ostad. And now, Design Monks has more than 25 happy employees who are proud of being
              a part of this company.
            </p>
          </div>
        </article>
      </article>
      <article className='about-container-second'>
        <div className='about-title-container'>
          <h3 className='section-title'>Who we are</h3>
          <h2 className='section-subtitle'>We're not just about design</h2>
          <p className='section-description'>
            We're your partners in crafting digital experiences that blend innovation with functionality
          </p>
        </div>
        <article className='about-content'>
          <picture className='about-image'>
            <img src='https://designmonks.co/wp-content/uploads/2023/12/client-card.png' alt='Image' loading='lazy' />
          </picture>
        </article>
      </article>
    </section>
  );
};

export default About;
