import React from 'react'
import {Link} from 'react-router-dom'

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
       <div>
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
       </div>
   </div>
</footer>
        </div>
    )
}

export default Layout