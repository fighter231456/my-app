import React, { Component } from 'react'
import profilepic from '../img/Profile.jpg'

class About extends Component {
    render() {
        return (
             <div className='condiv about'>
                <h1 className='subttopic'>About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic"/>
                <h3>Hi, I'm Pattaraphol Weingkum</h3>
                <p>I am a software engineering student of programming experience who hopes to study for a senior programming </p>
                <h1>DATE OF BIRTH: 24-03-2004</h1>
             </div>
        );
    }
}
export default About;