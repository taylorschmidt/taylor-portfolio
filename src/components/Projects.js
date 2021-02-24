import React from "react";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaPython,
  FaGit,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiFlask,
  SiNextDotJs
} from "react-icons/si";
import {
  BiBoltCircle
} from "react-icons/bi"

const Projects = () => {
  return (
    <>
      <div className="container center-align">
      <img className=" responsive-img" src="https://i.imgur.com/Td5CWaG.png"/>
      <div className="row row-b top-div">
          <div className="col l6 m6 s12">
            <div>
              <img
                className="responsive-img"
                src="https://i.imgur.com/gxkGrbR.gif"
              />
            </div>
          </div>
          <div className="col l6 m6 s12">
          <h4 className="project-header">parks passport</h4>
            <div>
              Keep a passport of your visited national parks and query visitor and camping information.
            </div>
            <div className="inhale-ejs">
            <SiNextDotJs size="2em" />
            <BiBoltCircle size ="2em" />
            <SiFlask size="2em" />
            <SiPostgresql size="2em" />
            </div>
            <a class="buttons btn project-button" href="https://parks-passsport.vercel.app/">
              View the App
            </a>
            <a
              class="buttons btn project-button"
              href="https://github.com/taylorschmidt/Parks-Pass-BackEnd"
            >
              View the Code
            </a>
          </div>
        </div>
        <div className="row row-a top-div">
          <div className="col l6 m6 s12 project-container">
          <h4 className="project-header">roast</h4>
            <div>
              Query cozy cafes in your area and leave reviews to help other
              coffee lovers.
            </div>
            <div>
              <FaReact size="2em" />
              <FaNodeJs size="2em" />
              <SiMongodb size="2em" />
              <FaBootstrap size="2em" />
            </div>
            <div>
              <a class="buttons btn project-button" href="http://roast-cafes.surge.sh/">
                View the App
              </a>
              <a
                class="buttons btn project-button"
                href="https://github.com/taylorschmidt/Roast-FrontEnd"
              >
                View the Code
              </a>
            </div>
          </div>
          <div className="col l6 m6 s12">
            <div>
              <img
                className="responsive-img"
                src="https://i.imgur.com/rf4rUKC.gif"
              />
            </div>
          </div>
        </div>
        <div className="row row-b top-div">
          <div className="col l6 m6 s12">
            <div>
              <img
                className="responsive-img"
                src="https://i.imgur.com/t7zTVoB.gif"
              />
            </div>
          </div>
          <div className="col l6 m6 s12">
          <h4 className="project-header">inhale</h4>
            <div>
              View air quality data in your area and journal about your
              symptoms.
            </div>
            <div className="inhale-ejs">
              <FaNodeJs size="2em" />
              <FaCss3Alt size="2em" />
              <SiPostgresql size="2em" />
            </div>
            <a class="buttons btn project-button" href="https://inhale-air.herokuapp.com/">
              View the App
            </a>
            <a
              class="buttons btn project-button"
              href="https://github.com/taylorschmidt/Inhale-AirQuality"
            >
              View the Code
            </a>
          </div>
        </div>
        <div className="row row-a top-div">
          <div className="col l6 m6 s12">
          <h4 className="project-header">assess the anatomy</h4>
            <div>Play against a friend to test your anatomy knowledge!</div>
            <div>
              <FaHtml5 size="2em" />
              <SiJavascript size="2em" />
              <FaCss3Alt size="2em" />
            </div>
            <div>
              <a
                class="buttons btn project-button"
                href="https://taylorschmidt.github.io/Assess-the-Anatomy-Game/"
              >
                View the App
              </a>
              <a
                class="buttons btn project-button"
                href="https://github.com/taylorschmidt/Assess-the-Anatomy-Game"
              >
                View the Code
              </a>
            </div>
          </div>
          <div className="col l6 m6 s12">
            <div>
              <img
                className="responsive-img"
                src="https://i.imgur.com/DtlbcRh.gif"
              />
            </div>
          </div>
        </div>
        {/* <div className="row">Project 4</div> */}
      </div>
    </>
  );
};

export default Projects;
