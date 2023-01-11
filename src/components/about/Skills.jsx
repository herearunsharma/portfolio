import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "HTML", skillName: "HTML" },
  { skillClass: "p100", skillPercent: "NodeJs", skillName: "JAVASCRIPT" },
  { skillClass: "p100", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p100", skillPercent: "66", skillName: "PHP" },
  { skillClass: "p100", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p100", skillPercent: "50", skillName: "JQUERY" },
  { skillClass: "p100", skillPercent: "65", skillName: "ANGULAR" },
  { skillClass: "p100", skillPercent: "45", skillName: "REACT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
