import React from 'react'
import {Link} from 'react-router-dom'
import { FaHtml5, FaReact, FaNodeJs, FaCss3Alt, FaPython, FaGit, FaDatabase } from 'react-icons/fa';
import {SiJavascript, SiMongodb, SiPostgresql, SiPostman, SiFlask} from 'react-icons/si'
const About = () => {
    return(
        <>
        <div className="container">
        <div className="row">
        <div className="col s6 m6">
        <h1 className='page-title'>what i'm about</h1>
        <div>As a software engineer with seven years of experience as a STEM educator, I am a supportive and loyal team-member. My lifelong love of learning and teaching is matched by my approachable and inviting persona. I use my meticulous eye for detail and dedication to success to ensure innovative software development. </div>
        <Link to="/contact"><a class="buttons btn">Let's Chat!</a></Link>
        </div>
        <div className="col s6 m6">
        <img className="responsive-img" src="https://i.imgur.com/3hpPOdJ.png"/>
        </div>
        </div>
        <div class="row center-align">
            <img className="responsive-img" src="https://i.imgur.com/4PWN5jR.png"/>
            <div className="row">
                <div className="col s2">
                    <FaHtml5 size="4em"/>
                    <div>HTML5</div>
                </div>
                <div className="col s2">
                    <FaReact size="4em"/>
                    <div>React</div>
                </div>
                <div className="col s2">
                    <FaNodeJs size="4em"/>
                    <div>Node JS</div>
                </div>
                <div className="col s2">
                    <SiJavascript size="4em"/>
                    <div>Javascript</div>
                </div>
                <div className="col s2">
                    <FaCss3Alt size="4em"/>
                    <div>CSS</div>
                </div>
                <div className="col s2">
                    <FaPython size="4em"/>
                    <div>Python</div>
                </div>
            </div>
            <div className="row">
            <div className="col s2">
                    <SiMongodb size="4em"/>
                    <div>MongoDB</div>
                </div>
                <div className="col s2">
                    <SiPostgresql size="4em"/>
                    <div>PostgreSQL</div>
                </div>
                <div className="col s2">
                    <SiPostman size="4em"/>
                    <div>Postman</div>
                </div>
                <div className="col s2">
                    <FaGit size="4em"/>
                    <div>git</div>
                </div>
                <div className="col s2">
                    <SiFlask size="4em"/>
                    <div>Flask</div>
                </div>
                <div className="col s2">
                    <FaDatabase size="4em"/>
                    <div>SQL</div>
                </div>
            </div>
        </div>

        </div>
        </>
    )
}

export default About