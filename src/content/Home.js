import React, { Component } from 'react'
import Social from '../component/Social'
import ReactTypingEffect from 'react-typing-effect'
import profilepic from '../img/Profile.jpg'
class Home extends Component{
    render() {
        return (
             <div className='condiv home'>
                <img src={profilepic} alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['I am Pattaraphol', 'I am beginner programer']} speed={80} eraseDelay={200} className='typingeffect'/>
              
                <Social />

             </div>
        );
    }
}
export default Home;