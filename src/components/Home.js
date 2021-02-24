import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

//Components
import Spinner from "./common/Spinner";

//CSS import
import "../css/components/Home.css";

const Home = () => {
  //setting up state

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col s12 m5 l5 left-div">
          <img
            className="responsive-img"
            src="https://i.imgur.com/z5IlRTa.png"
          />
        </div>
        <div className="col s12 m7 l7 center-align right-div">
          <br></br>
          <h1 className="page-title ">hi, there.</h1>
          <h5>I'm Taylor Schmidt, a full-stack software engineer.</h5>
          <br></br>
          <Link to="/about">
            <a className="home-buttons btn">Get to Know Me</a>
          </Link>
        </div>
      </div>
      <div className="row center-align">
        <img className="responsive-img" src="https://i.imgur.com/Td5CWaG.png" />
      </div>
      <div className="row center-align">
      <div class="col s12 m6 l6">
        <div className="card main-div">
          <div className="card-image home-project">
          <Link to='/projects'>
            <img className="project-image" src="https://i.imgur.com/Xq5GyXB.png"/>
            <div class="home-title card-title">
            <SiNextDotJs size="1.5em" />
            <BiBoltCircle size ="1.5em" />
            <SiFlask size="1.5em" />
            <SiPostgresql size="1.5em" />
             <div>View My Projects</div> </div>
          </Link>
          </div>
        </div>
      </div>
      
        <div className="col s12 m6 l6">
          <div className="card main-div">
            <div className="card-image home-project">
              <Link to="/projects">
                <img
                  className="project-image"
                  src="https://i.imgur.com/L9RU5xo.png"
                />
                <div class="home-title card-title">
                <FaReact size="1.5em" />
              <FaNodeJs size="1.5em" />
              <SiMongodb size="1.5em" />
              <FaBootstrap size="1.5em" />
              
              <div>View My Projects</div></div>
              </Link>
            </div>
          </div>
        </div>
      {/* <div className= "row"> */}
      <div className="col l6 m6 s12 center-align">
        <div className="card main-div">
          <div className="card-image home-project">
            <Link to="/projects">
              <img
                className="project-image"
                src="https://i.imgur.com/pUP34Nb.png"
              />
              <div class="home-title card-title">
              <FaNodeJs size="1.5em" />
              <FaCss3Alt size="1.5em" />
              <SiPostgresql size="1.5em" />
                <div>View My Projects</div></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="col l6 m6 s12 center-align">
        <div className="card main-div">
          <div className="card-image home-project">
            <Link to="/projects">
              <img
                className="project-image"
                src="https://i.imgur.com/DYIl8UL.png"
              />
              <div className="home-title card-title"> <FaHtml5 size="1.5em" />
              <SiJavascript size="1.5em" />
              <FaCss3Alt size="1.5em" /><div>View My Projects</div></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
