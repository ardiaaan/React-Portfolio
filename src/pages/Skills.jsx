import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Skills" />
          <div className="container">
            <div className="row skills">
              <div className="row one">
                <div className="col-xs-3">
                <h3>Html</h3>
                  <img className="skills-img" src={require('../images/html.png')}/>

                </div>
                <div className="col-xs-3">
                <h3>Css</h3>
                  <img className="skills-img" src={require('../images/css.png')}/>

                </div>
                <div className="col-xs-3">
                <h3>Javascript</h3>
                  <img className="skills-img" src={require('../images/js.png')}/>

                </div>
              </div>

              <div className="row two">
                <div className="col-xs-3">
                  <h3>React</h3>
                  <img className="skills-img" src={require('../images/react.svg')}/>

                </div>
                <div className="col-xs-3">
                <h3>Bootstrap</h3>
                  <img className="skills-img" src={require('../images/bootstrap.svg')}/>

                </div>
                <div className="col-xs-3">
                <h3>Java</h3>
                  <img className="skills-img" src={require('../images/java.png')}/>

                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Skills
