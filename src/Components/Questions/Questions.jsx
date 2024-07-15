import { useState } from "react";
import "./Questions.css";
import QuestionsData from "./QuestionsData";

const Questions = () => {
  const [selected, setSelected] = useState(0);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <section className="questions">
      <article className="questions-titles">
        <h2 className="section-title questions-title">Find Answers</h2>
        <h3 className="section-subtitle questions-subtitle">
          Frequently asked question
        </h3>
      </article>
      <article className="questions-container">
        {QuestionsData.map((question, index) => {
          return (
            <div key={index} className="questions-card">
              <div className="question-ask" onClick={() => toggle(index)}>
                <h3 className="questions-card-title">{question.ask}</h3>
                <span className="questions-card-icon">
                  {selected === index ? (
                    <i className="fas fa-minus"></i>
                  ) : (
                    <i className="fas fa-plus"></i>
                  )}
                </span>
              </div>
              <div
                className={
                  selected === index
                    ? "questions-card-text question-show"
                    : "questions-card-text"
                }
              >
                <p>{question.answer}</p>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Questions;
