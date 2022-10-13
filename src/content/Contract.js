import React,{ Component } from 'react';

import Social from '../component/Social';

class Contact extends Component{
    render() {
        return (
             <div className='condiv'>
                <h1 className='subtopic'>Contact Me</h1>
                <h3>Email : fighter231456@gmail.com</h3>
                <h3>Address: 30/9 Bangkae,</h3>
                <h3>Mueng: Bangkok, 10160</h3>
                <h3>Tel : +66951900261</h3>
                <Social />
             </div>
        );
    }
}

export default Contact;