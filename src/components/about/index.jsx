import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import laptopImg from "../../assets/img/about.png"
import Certificate from "./Certificate";
import Techstack from './Techstack'
import Toolstack from './Toolstack'
import Github from "./Github";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  Know Who I'm
                </h3>
              </div>
              {/* End .col */}

              {/* <div className="col-12 d-block d-sm-none">
                <img
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div> */}
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              {/* <div className="col-12 mt-1">
                <a className="button" href={cv} download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div> */}
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>

      <hr className="separator mt-1" />

      <div className="container">
        <div className="row">
            <div className="col-12">
              <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                Certifcations
              </h3>
            </div>
            <div className="col-lg-6 m-15px-tb">
              <div className="resume-box">
                <Certificate />
              </div>
            </div>
          </div>

          <hr className="separator mt-1" />

          <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              Skills
            </h3>
          </div>
          <Techstack />
        </div>

        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              Tools I Use
            </h3>
          </div>
          <Toolstack />
        </div>

          <Github />

        </div>

    </section>
  );
};

export default index;
