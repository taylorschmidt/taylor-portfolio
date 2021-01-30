import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div className="col s12 m5 l5">
          <img
            className="responsive-img"
            src="https://i.imgur.com/z5IlRTa.png"
          />
        </div>
        <div className="col s12 m7 l7 center-align">
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
      {/* <div class="col s6 center-align">
        <div className="card main-div">
          <div className="card-image home-project">
          <Link to='/projects'>
            <img className="project-image" src="https://i.imgur.com/L9RU5xo.png"/>
            <div class="home-title card-title">View My Projects</div>
          </Link>
          </div>
        </div>
      </div> */}
      <div className="row center-align">
        <div className="col s12 m4 l4">
          <div className="card main-div">
            <div className="card-image home-project">
              <Link to="/projects">
                <img
                  className="project-image"
                  src="https://i.imgur.com/L9RU5xo.png"
                />
                <div class="home-title card-title">View My Projects</div>
              </Link>
            </div>
          </div>
        </div>
      {/* <div className= "row"> */}
      <div className="col l4 m4 s12 center-align">
        <div className="card main-div">
          <div className="card-image home-project">
            <Link to="/projects">
              <img
                className="project-image"
                src="https://i.imgur.com/pUP34Nb.png"
              />
              <div class="home-title card-title">View My Projects</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="col l4 m4 s12 center-align">
        <div className="card main-div">
          <div className="card-image home-project">
            <Link to="/projects">
              <img
                className="project-image"
                src="https://i.imgur.com/DYIl8UL.png"
              />
              <div className="home-title card-title">View My Projects</div>
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
