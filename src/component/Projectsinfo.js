import React,{ Component } from 'react'

class Projectsinfo extends Component{
    render() {
        return (
             <div className='widecard'>
                <div className='wide-on'>
                    <h3>{this.props.title}</h3>
                    <h4 className='secondtext'>{this.props.where}</h4>
                    <h4 className='thirdtext'>{this.props.info} - {this.props.info2}</h4>
  

                </div>
             </div>
        );
    }
}
export default Projectsinfo;