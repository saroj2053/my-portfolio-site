import "./Resume.css";
const Resume = () => {
  return (
    <div className="resume">
      <h2 className="resume__heading">Resume_</h2>
      <div className="resume__container">
        <div className="resume__data">
          <h3 className="resume__title text-lg">EDUCATION</h3>
          <div className="resume__item">
            <h2 className="resume-education__title text-lg">
              TECHNICAL UNIVERSITY OF CHEMNITZ
            </h2>
            <h4 className="resume-education__subtitle text-lg">
              Masters in Web Engineering
            </h4>
            <p className="resume__date text-lg">10/2022 - Present</p>
            <p className="resume__description text-sm">
              Relevant Coursework: Software Engineering, Database Management,
              XML, Current Trends in Web Engineering, Cloud and Web Applications
            </p>
          </div>
          <div className="resume__item">
            <h2 className="resume-education__title text-lg">
              AMRITSAR COLLEGE OF ENGINEERING AND TECHNOLOGY
            </h2>
            <p className="resume-education__uni">
              (Affiliated to I.K. Gujral Technical University)
            </p>
            <h4 className="resume-education__subtitle text-lg">
              Bachelor of Technology in Computer Science and Engineering
            </h4>
            <p className="resume__date text-lg">09/2016 - 11/2020</p>
            <p className="resume__description text-sm">
              Relevant Coursework: Fundamental of Computer Programming and IT,
              Web Technologies, Design of Data Algorithms, Software Engineering,
              Database Management, Artificial Intelligence, Machine Learning
            </p>
          </div>
        </div>
        <div className="resume__data">
          <h3 className="resume__title text-lg">EMPLOYMENT</h3>
          <div className="resume__item">
            <h2 className="resume-employment__title text-lg">
              FULL STACK DEVELOPER
            </h2>
            <h4 className="resume-employment__subtitle text-lg">
              Susankya Tech Pvt. Ltd.
            </h4>
            <p className="resume__date text-lg">11/2020 - 07/2022</p>
            <div className="resume__description text-sm">
              <ul style={{ paddingLeft: "30px" }}>
                <li>
                  Technology Stack: HTML, CSS, Javascript, Nodejs, express,
                  MongoDB, ReactJs
                </li>
              </ul>
            </div>
          </div>
          <div className="resume__item">
            <h2 className="resume-employment__title text-lg">
              WEB DEVELOPER INTERN
            </h2>
            <h4 className="resume-employment__subtitle text-lg">
              Sarobar Technology Pvt. Ltd.
            </h4>
            <p className="resume__date text-lg">04/2020 - 10/2020</p>
            <div className="resume__description text-sm">
              <ul style={{ paddingLeft: "30px" }}>
                <li>
                  Technology Stack: Python, Django, PostgreSQL, HTML, CSS,
                  Bootstrap, Javascript
                </li>
              </ul>
            </div>
          </div>
          <div className="resume__item">
            <h2 className="resume-employment__title text-lg">
              DATA ANALYST INTERN
            </h2>
            <h4 className="resume-employment__subtitle text-lg">
              Contentiolabs Pvt. Ltd
            </h4>
            <p className="resume__date text-lg">01/2020 - 04/2020</p>
            <div className="resume__description text-sm">
              <ul style={{ paddingLeft: "30px" }}>
                <li>
                  Technology Stack: Python, Jupyter Notebook, Pandas, Numpy,
                  Visualisation using matplotlib and Seaborn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
