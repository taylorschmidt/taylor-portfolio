import React from "react";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaPython,
  FaGit,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiFlask,
} from "react-icons/si";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l6">
            <h1 className="page-title center-align">what i'm about</h1>
            <div className="about-p">
              As a software engineer with seven years of experience as a STEM
              educator, I am a supportive and loyal team-member. My lifelong
              love of learning and teaching is matched by my approachable and
              inviting persona. <div className="about-p2">I'm in search of in search of a collaborative team that is in the
              business of pushing boundaries with code.</div>
            </div>

            <Link to="/contact">
              <a class="buttons btn project-button">Let's Chat!</a>
            </Link>
            <a
              className="btn buttons project-button"
              href="https://drive.google.com/file/d/15t4xNpmLy2BWd4dFwv-6-japqPvof2tU/view?usp=sharing"
            >
              My Resume
            </a>
          </div>
          <div className="col s12 m12 l6">
            <img
              className="responsive-img"
              src="https://i.imgur.com/1oDPBUs.png"
            />
          </div>
        </div>
        <div class="row center-align">
          <img
            className="responsive-img"
            src="https://i.imgur.com/4PWN5jR.png"
          />
          <div className="row">
          <div className="col s4 m2 l2">
              <SiJavascript size="4em" />
              <div>Javascript</div>
            </div>
            <div className="col s4 m2 l2">
              <FaHtml5 size="4em" />
              <div>HTML5</div>
            </div>
            <div className="col s4 m2 l2">
              <FaReact size="4em" />
              <div>React</div>
            </div>
            <div className="col s4 m2 l2">
              <FaNodeJs size="4em" />
              <div>Node JS</div>
            </div>
            <div className="col s4 m2 l2">
              <FaCss3Alt size="4em" />
              <div>CSS</div>
            </div>
            <div className="col s4 m2 l2">
              <FaPython size="4em" />
              <div>Python</div>
            </div>
          </div>
          <div className="row">
            <div className="col s4 m2 l2">
              <SiMongodb size="4em" />
              <div>MongoDB</div>
            </div>
            <div className="col s4 m2 l2">
              <SiPostgresql size="4em" />
              <div>PostgreSQL</div>
            </div>
            <div className="col s4 m2 l2">
              <SiPostman size="4em" />
              <div>Postman</div>
            </div>
            <div className="col s4 m2 l2">
              <FaGit size="4em" />
              <div>git</div>
            </div>
            <div className="col s4 m2 l2">
              <SiFlask size="4em" />
              <div>Flask</div>
            </div>
            <div className="col s4 m2 l2">
              <FaDatabase size="4em" />
              <div>SQL</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
