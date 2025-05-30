import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin-square",
    link: "https://www.linkedin.com/in/herearunsharma",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/herearunsharma" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/herearunsharma",
  },
  { 
    iconName: "fa fa-github", 
    link: "https://github.com/herearunsharma" },
  { 
    iconName: "fa fa-instagram", 
    link: "https://instagram.com/herearunsharma" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
