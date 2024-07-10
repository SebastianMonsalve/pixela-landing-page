import "./OurWorks.css";
import OurWorksData from "./OurWorksData";

const OurWorks = () => {
  return (
    <section className="works">
      <article className="works-title-container">
        <div className="works-titles">
          <h3 className="section-title">Our Works</h3>
          <h2 className="section-subtitle works-subtitle">Case studies</h2>
        </div>
        <div className="works-descriptions">
          <p className="works-description">
            Well-crafted development and design solutions are essential present
            products that your audience will fall in love with
          </p>
        </div>
      </article>
      <article className="works-card-container">
        {OurWorksData.map((work, index) => {
          const cardClassName =
            index % 2 === 0 ? "works-card" : "works-card works-card-reverse";
          return (
            <div key={index} className={cardClassName}>
              <div className="works-card-image">
                <img src={work.image} alt={work.title} draggable="false" />
              </div>
              <div className="works-card-content">
                <div className="works-card-category">
                  <p>{work.category}</p>
                </div>
                <div className="works-card-text">
                  <h4 className="works-card-title">{work.title}</h4>
                  <p className="works-card-description">{work.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </article>
      <button className="works-button">See All Cases</button>
    </section>
  );
};

export default OurWorks;
