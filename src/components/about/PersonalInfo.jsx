import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div>
      <ul className="about-list list-unstyled open-sans-font">
        <p>I'm currently studying Bachelors in <b>Computer Applications</b> from Amrita Vishwa Vidyapeetham, Coimbatore, and Diploma in <b>Mechanical Engineering</b> from Pimpri Chinchwad College Of Engineering.</p>
        <p>My interests range from computer programming, machine learning, artificial intelligence, blockchain, electric vehicles, green energy, physics, economics, finance, business, philosophy and much more. I also seek out new challenges.</p>
        <p>Available for new projects and collaborations.</p>
      </ul>

      <h5 className="socialtexth">FIND ME ON</h5>
            <p className="socialtextp">
              Feel free to connect with me
            </p>

      <Row>
          <Col md={12} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/herearunsharma"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/herearunsharma"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/herearunsharma/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/herearunsharma/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    </div>
  );
};

export default PersonalInfo;
