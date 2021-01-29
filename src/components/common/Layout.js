import React from 'react'
import {Link} from 'react-router-dom'
import { FaLinkedin, FaGithub, FaHtml5, FaReact, FaNodeJs, FaCss3Alt, FaPython, FaGit, FaDatabase, FaBootstrap } from 'react-icons/fa';
import {SiJavascript, SiMongodb, SiPostgresql, SiPostman, SiFlask} from 'react-icons/si'
import {AiOutlineMail} from 'react-icons/ai'

const Layout = (props) => {
    return(
        <div className='main'>
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile"
                    // hide-on-med-and-down
                     className="right ">
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='/projects'>PROJECTS</Link></li>
                        <li><Link to='/contact'>CONTACT</Link></li>
                    </ul>
                    <ul id="nav-mobile"
                    // hide-on-med-and-down
                     className="left ">
                        <li><Link to='/'>HOME</Link></li>
                    </ul>
                </div>
            </nav>
            <div>
                {/* render anything that is passed - in this case, our routes */}
                {props.children}
            </div>
<footer className="page-footer">
   <div className="container">
       <div className="footer-container">
       <a href="https://github.com/taylorschmidt"> <FaGithub size="2em" color="white" /></a>
       <a href="https://www.linkedin.com/in/taylorhschmidt/"> <FaLinkedin size="2em" color="white" /></a>
       <a href="mailto:taylorschmidtcodes@gmail.com"> <AiOutlineMail size="2em" color="white" /></a>
       <div>© Taylor Schmidt 2021</div>
       </div>
   </div>
</footer>
        </div>
    )
}

export default Layout