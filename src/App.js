import React, {useState} from 'react'
import { Route } from 'react-router-dom'


// Components imports
import Home from "./components/Home";
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Layout from "./components/common/Layout"
// CSS imports
import "./css/App.css";

const App = () => {

  
  

  return (
    <div className="App">
      <Layout>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact}/>
        <Route path='/projects' component={Projects} />
      </Layout>
    </div>
  );
};

export default App;
