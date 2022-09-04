import React, { Component } from 'react'
import Social from '../component/Social'
import ReactTypingEffect from 'react-typing-effect'
// import profilepic from '../img/Profile.jpg'
class Home extends Component{
    render() {
        return (
             <div className='condiv home'>
                <img src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/304855563_2201402410026233_4973621000138797792_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEKLWv0JZfqkDheNVk9BXkrUuTBDWFZdFJS5MENYVl0Uk_AuHYiNfrrkt_SbEjlr4hwCVX7LkKG4qdeGXCb-WW0&_nc_ohc=HKeUzyQObRAAX95AxOo&_nc_ht=scontent.fbkk5-1.fna&oh=00_AT-uL__OT0OsmsCbKURhcqxCiPWb7lI_Y26Hfq1tzIIKAg&oe=6317A3A8" alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['I am Pattaraphol', 'I am beginner programer']} speed={80} eraseDelay={200} className='typingeffect'/>
              
                <Social />

             </div>
        );
    }
}
export default Home;