import { resumeEducationData, resumeEmploymentData } from "../../data/resume";
import "./Resume.css";
const Resume = () => {
  return (
    <div className="resume">
      <h2 className="resume__heading">Resume_</h2>
      <div className="resume__container">
        <div className="resume__data">
          <h3 className="resume__title text-lg">EDUCATION</h3>
          {resumeEducationData.map((item, index) => (
            <div className="resume__item" key={index}>
              <h2 className="resume-education__title text-lg">{item.title}</h2>
              {item.extra && (
                <p className="resume-education__uni">{item.extra}</p>
              )}
              <h4 className="resume-education__subtitle text-lg">
                {item.subtitle}
              </h4>
              <p className="resume__date text-lg">{item.date}</p>
              <p className="resume__description text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="resume__data">
          <h3 className="resume__title text-lg">EMPLOYMENT</h3>
          {resumeEmploymentData.map((item, index) => (
            <div className="resume__item" key={index}>
              <h2 className="resume-employment__title text-lg">{item.title}</h2>
              <h4 className="resume-employment__subtitle text-lg">
                {item.subtitle}
              </h4>
              <p className="resume__date text-lg">{item.date}</p>
              <div className="resume__description text-sm">
                <ul style={{ paddingLeft: "30px" }}>
                  <li>{item.description}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
