import React,{ Component } from 'react'

import WorkInfo from '../component/WorkInfo'

class Education extends Component{
    render(){
        return(
            <div className='condiv'>
                <h1 className='subtopic'>WORK EXPERIENCE</h1>
                <WorkInfo title="Software Development" where="Syslink Technology Co.,Ltd" from="2021" info="Script Tester" info2="Test Api/Rount" info3="Unit Tester Create/Get/Delete/Update"/>
            </div>
        );
    }
}

export default Education;