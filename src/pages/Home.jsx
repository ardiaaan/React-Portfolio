import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import '../images/ardian.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" />
        <div className="container">
          <div className="col-8">
            <h2>Hello!</h2>
              <p>My name is Ardian Durmishi and I am 23 years old student living in Espoo Finland. I study in Haaga-Helia University of Appleid Sciences.
              My study field is Business Information Technology. My study orientation is in the Digital Service Field</p>
            <h3>Here is a description of my knowledge after graduation</h3>
              <ul>
                <li>Professional of digital services</li>
                <li>Ability to understand the needs of both business and end users</li>
                <li>Understanding the customer´s value production prospects in the whole</li>
                <li>Modeling the needs in such a format that they can be communicated with professionals</li>
                <li>I am in favor of developing a digital solution that is the most appropriate and cost-effective and that it solves the right need</li>
              </ul>
          </div>
          <div className="col-2">
            <img className="profile" src={require('../images/ardian.jpg')}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
