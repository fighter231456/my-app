import React,{ Component } from 'react'

import Projectsinfo from '../component/Projectsinfo'

class Education extends Component{
    render(){
        return(
            <div className='condiv'>
                <h1 className='subtopic'>PROJECTS</h1>
                <Projectsinfo title="Arduino C++" where="Power Socket Command by Arduino" info="Use Wifi or Bluetooth to Turn ON/OFF" info2="by Telephone"/>
            </div>
        );
    }
}

export default Education;