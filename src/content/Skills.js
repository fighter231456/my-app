import React,{ Component } from "react";

class Skills extends Component {

    constructor(props){
        super(props);

        this.state={
            'myskills': ['HMTL','CSS','JS','ReactJS','NodeJS']
        }
    }

    render() {
        return (
             <div className='condiv skills'>
                <h1 className="subtopic">My Skills</h1>
                <ul1>
                    {this.state.myskills.map((value) =>{
                        return <li>{value}</li>
                    })}
                </ul1>
             </div>
        );
    }
}

export default Skills;