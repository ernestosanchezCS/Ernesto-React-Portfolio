import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
    return (
        <footer className='row text-center mb-10 fixed-bottom'>
            <a
                className='col-2 text-white ml-5'
                href='https://github.com/ernestosanchezCS'
                target='_blank'
                rel='noopener noreferrer'
            >
                <BsGithub size='50' />
                <br></br> Github
            </a>
            <br></br>
            <div className='col-8'></div>
            <br></br>
            <a
                className=' col-2 text-white mx-auto'
                href='https://www.linkedin.com/in/ernesto-sanchez-3aa82414a/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <BsLinkedin size='50' /> <br></br>Linked In
            </a>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </footer>
    );
}

export default Footer;
