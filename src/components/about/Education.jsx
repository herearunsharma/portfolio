import React from "react";

const educationContent = [
  {
    year: "2022 - 2025",
    degree: "BACHELOR DEGREE ",
    institute: "Amrita Vishwa Vidyapeeth",
    details: `Studying Computer Science with concepts ranging from Computer Essentials, Operating System to Problem Solving and Applied Mathematics. The Program also includes Communication and Management Courses.`,
  },
  {
    year: "2022 - 2024",
    degree: "DIPLOMA",
    institute: "PCCOE",
    details: `Studying Mechanical Engineering from Pimpri Chinchwad College of Engineering with variaty of concepts.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
