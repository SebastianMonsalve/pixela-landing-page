import './Services.css';
import ServicesData from './servicesData';

const Services = () => {
  const translateServices = (data) => {
    return data;
  };

  const Services = translateServices(ServicesData);

  return (
    <section className='services'>
      <article className='services-container'>
        <article className='services-text-container'>
          <h3 className='section-title'>Services</h3>
          <h2 className='section-subtitle services-text'>We help your business grow</h2>
          <p className='section-description services-text-1'>
            As a distinguished UI/UX design firm, we offer comprehensive solutions encompassing research, wireframing,
            UI design, and development. Here are our specialized services:
          </p>
        </article>
        <article className='services-card-container'>
          {Services.map((service, index) => {
            return (
              <div key={index} className='services-card'>
                <div className='box-count'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='49' height='58' viewBox='0 0 49 58' fill='none'>
                    <ellipse
                      cx='24.524'
                      cy='28.9095'
                      rx='23'
                      ry='30'
                      transform='rotate(25 24.524 28.9095)'
                      fill='#5e1bb1'
                    ></ellipse>
                  </svg>
                  <span className='count-text'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                </div>
                <div className='service-card-text'>
                  <h4 className='service-card-title'>{service.title}</h4>
                  <p className='service-description'>{service.description}</p>
                </div>
              </div>
            );
          })}
        </article>
      </article>
    </section>
  );
};

export default Services;
