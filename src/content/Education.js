import React,{ Component } from 'react'

import Widecard from '../component/Widecard'

class Education extends Component{
    render(){
        return(
            <div className='condiv'>
                <h1 className='subtopic'>My Education</h1>
                <Widecard title="Computer Engineering" where="Rajamangala University of Technology Phra Nakhon(RMUTP)" from="2022" to="Present"/>
                <Widecard title="Electronic" where="Siam Technology College" from="2019" to="2021"/>


            </div>
        );
    }
}

export default Education;