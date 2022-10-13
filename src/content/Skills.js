import React,{ Component } from "react";

class Skills extends Component {

    constructor(props){
        super(props);

        this.state={
            'myskills': ['HTML','CSS','JS','ReactJS','NodeJS','C++','C','Python'],
            'languages': ['Thai','English']
            
        }
    }

    render() {
        return (
             <div className='condiv skills'>
                <h1 className="subtopic">MY SKILLS</h1>
                <ul1>
                    {this.state.myskills.map((value) =>{
                        return <li>{value}</li>
                    })}
                </ul1>
                <h2 className="subtopic">LANGUAGES</h2>
                <ul1>
                    {this.state.languages.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul1>
             </div>
        );
    }
}

export default Skills;