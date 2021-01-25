import React from 'react'
import { FaHtml5, FaReact, FaNodeJs, FaCss3Alt, FaPython, FaGit, FaDatabase, FaBootstrap } from 'react-icons/fa';
import {SiJavascript, SiMongodb, SiPostgresql, SiPostman, SiFlask} from 'react-icons/si'

const Projects = () => {
  



    return(
<>
<div className="container">
        <div className="row">
          <div className="col s6">
          <div>ROAST</div>
          <div>Query cozy cafes in your area and leave reviews to help other coffee lovers.</div>
          <div>
            <FaReact size="2em"/>
            <FaNodeJs size="2em" />
            <SiMongodb size="2em" />
            <FaBootstrap size="2em" />
          </div>
          <div>
          <a class="buttons btn" href="http://roast-cafes.surge.sh/">View the App</a>
          <a class="buttons btn" href="https://github.com/taylorschmidt/Roast-FrontEnd">View the Code</a>
          </div>
          </div>
          <div className="col s6">
            <div><img className="responsive-img" src="https://i.imgur.com/rf4rUKC.gif"/></div>
          </div>
        </div>
        <div className="row"> 
        <div className="col s6">
        <div><img className="responsive-img" src="https://i.imgur.com/t7zTVoB.gif"/></div>
          </div>
          <div className="col s6">
          <div>INHALE</div>
          <div>View air quality data in your area and journal about your symptoms.</div>
          <div>
            <FaNodeJs size="2em" />
            EJS
            <FaCss3Alt size="2em" />
            <SiPostgresql size="2em"/>

          </div>
          <a class="buttons btn" href="https://inhale-air.herokuapp.com/">View the App</a>
          <a class="buttons btn" href="https://github.com/taylorschmidt/Inhale-AirQuality">View the Code</a>
          </div>
          </div>
        <div className="row">          
        <div className="col s6">
          <div>ASSESS THE ANATOMY</div>
          <div>Play against a friend to test your anatomy knowledge!</div>
          <div>
            <FaHtml5 size="2em" />
            <SiJavascript size="2em" />
            <FaCss3Alt size="2em" />
          </div>
          <div> 
          <a class="buttons btn" href="https://taylorschmidt.github.io/Assess-the-Anatomy-Game/">View the App</a>
          <a class="buttons btn" href="https://github.com/taylorschmidt/Assess-the-Anatomy-Game">View the Code</a>
          </div>
          </div>
          <div className="col s6">
            <div><img className="responsive-img" src="https://i.imgur.com/DtlbcRh.gif"/></div>
          </div>
          </div>
        <div className="row">Project 4</div>
        </div>
        </>
    )
}

export default Projects