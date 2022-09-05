import React,{ Component } from 'react';

import Social from '../component/Social';

class Contact extends Component{
    render() {
        return (
             <div className='condiv'>
                <h1 className='subtopic'>Contact Me</h1>
                <h3>Email : fighter231456@gmail.com</h3>
                <h3>Instagram : @fi_g_ht</h3>
                <h3>Facebook : ไฟร์ท อ้วน</h3>
                <h3>Line : f4sfight </h3>
                <h3>Tel : 095-190-0261</h3>
                <Social />
             </div>
        );
    }
}

export default Contact;