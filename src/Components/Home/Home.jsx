import './Home.css';
import Header from '../Header/Header';

const Home = () => {
  return (
    <section className='home'>
      <Header />
      <article className='home-content'>
        <div className='home-text-container'>
          <h1 className='home-title'>Your vision our design, crafting digital experiences together</h1>
          <p className='home-text'>
            Say farewell to clunky enterprise software and embrace a new era of seamless user experiences. From design
            and UX to product innovation, we guide your journey from concept to growth
          </p>
        </div>
        <a href='#' className='btn-circle primary'>
          Contact Us
        </a>
        <picture className='arrow'>
          <img src='/assets/right-arrow.png' alt='Right arrow' width={'auto'} height={'auto'} />
        </picture>
        <p className='package-text'>
          starts from <span>$8OO</span> only
        </p>
      </article>
    </section>
  );
};

export default Home;
