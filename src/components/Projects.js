import React from 'react'

const Projects = () => {
  



    return(
<>
<div className="container">
        <div className="row">
          <div className="col s6">
          <div>Roast</div>
          <div>Query cozy cafes in your area and leave reviews to help other coffee lovers.</div>
          <div>Technology Used:
            {/* Icons here instead? */}
            <li>React</li>
            <li>Node js</li>
            <li>MongoDB</li>
            <li>Bootstrap</li>
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
          <div>Inhale</div>
          <div>View air quality data in your area and journal about your symptoms.</div>
          <div>Technology Used:
            {/* Icons here instead? */}
            <li>Node js</li>
            <li>EJS</li>
            <li>CSS</li>
          </div>
          </div>
          </div>
        <div className="row">          
        <div className="col s6">
          <div>Assess the Anatomy</div>
          <div>Play against a friend to test your anatomy knowledge!</div>
          <div>Technology Used:
            {/* Icons here instead? */}
            <li>HTML</li>
            <li>Javascript</li>
            <li>CSS</li>
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