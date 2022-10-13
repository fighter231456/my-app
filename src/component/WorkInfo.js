import React,{ Component } from 'react'

class WorkInfo extends Component{
    render() {
        return (
             <div className='widecard'>
                <div className='wide-on'>
                    <h3>{this.props.title}</h3>
                    <h4 className='secondtext'>{this.props.where}</h4>
                    <h4 className='secondtext'>{this.props.from}</h4>
                    <h4 className='thirdtext'>- {this.props.info}</h4>
                    <h4 className='thirdtext'>- {this.props.info2}</h4>
                    <h4 className='thirdtext'>- {this.props.info3}</h4>

                </div>
             </div>
        );
    }
}
export default WorkInfo;