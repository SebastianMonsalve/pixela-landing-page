import './Portfolio_List.css';
import ProjectsData from './portfolio_listData';

const Portfolio_List = () => {
  const translateProjects = (data) => {
    return data
  }

  const Projects = translateProjects(ProjectsData);

  return (
    <section className='portfolio_list'>
      <div className='portfolio-list-container'>
        <div className='portfolio-title-container'>
          <h3 className='section-title'>Case studies</h3>
          <h2 className='section-subtitle'>Browse our solutions across industries</h2>
        </div>
        <div className='filter-container'>
          <button className='filter-btn active'>All</button>
          <button className='filter-btn'>Healthcare</button>
          <button className='filter-btn'>Retail</button>
          <button className='filter-btn'>Finance</button>
        </div>
        <div className='project-grid-container'>
          {Projects.map((project, index) => (
            <article key={index} className='project-card'>
              <picture className='project-card-image'>
                <img src={project.image} alt={project.alt} />
                <a href={project.link} target='_blank'>
                  <span>Explore</span>
                </a>
              </picture>
              <div className='project-card-content'>
                <a href={project.link} target='_blank' className='project-card-title'>
                  {project.title}
                </a>
                <p className='project-card-text'>{project.text}</p>
              </div>
              <div className='project-card-category'>
                {project.categories.map((category, index) => (
                  <p key={index} className='category-text'>{category}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio_List;
