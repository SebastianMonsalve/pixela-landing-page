import "./Portfolio_List.css";
import ProjectsData from "./portfolio_listData";
import { useState } from "react";

const Portfolio_List = () => {
  const extractUniqueCategories = (data) => {
    const categoriesSet = new Set();
    data.forEach((project) => {
      project.categories.forEach((category) => {
        categoriesSet.add(category);
      });
    });
    return Array.from(categoriesSet);
  };

  const uniqueCategories = extractUniqueCategories(ProjectsData);

  const [activeCategory, setActiveCategory] = useState("All");

  const filterProjects = (category) => {
    if (category === "All") {
      return ProjectsData;
    }
    return ProjectsData.filter((project) =>
      project.categories.includes(category)
    );
  };

  const Projects = filterProjects(activeCategory);

  return (
    <section className="portfolio_list">
      <div className="portfolio-list-container">
        <div className="portfolio-title-container">
          <h3 className="section-title">Case studies</h3>
          <h2 className="section-subtitle">
            Browse our solutions across industries
          </h2>
        </div>
        <div className="filter-container">
          <button
            className={`filter-btn ${activeCategory === "All" ? "active" : ""}`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-grid-container">
          {Projects.map((project, index) => (
            <article key={index} className="project-card">
              <picture className="project-card-image">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <a href={project.link} target="_blank" title="View demo">
                  <span>Explore</span>
                </a>
              </picture>
              <div className="project-card-content">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-title"
                >
                  {project.title}
                </a>
                <p className="project-card-text">{project.text}</p>
              </div>
              <div className="project-card-category">
                <p
                  className="category-text"
                  onClick={() => setActiveCategory(project.categories[0])}
                >
                  {project.categories[0]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio_List;
