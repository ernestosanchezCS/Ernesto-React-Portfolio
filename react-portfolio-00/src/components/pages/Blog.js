import React from 'react';
import pdf from '../../Assets/docs/ErnestoSanchezResume.pdf';
export default function Blog() {
    return (
        <div className='container text-center'>
            <br></br>
            <br></br>
            <a
                className='col-2 text-white '
                href={pdf}
                target='_blank'
                rel='noopener noreferrer'
            >
                <h1>
                    <u>Click Here to View and/or Download My Resumè!</u>
                </h1>
            </a>
            <br></br>
            <br></br>
            <h2>
                <u>Full Stack Related Skills.</u>
            </h2>
            <br></br>
            <h3>Front End Proficiencies: </h3>
            <ul className='list-group w-50 mx-auto'>
                <li className='list-group-item'> HTML</li>
                <li className='list-group-item'> CSS</li>
                <li className='list-group-item'> JavaScript</li>
                <li className='list-group-item'> React</li>
                <li className='list-group-item'> jQuery</li>
                <li className='list-group-item'> Responsive Designs</li>
                <li className='list-group-item'> Bootstrap</li>
            </ul>
            <br></br>
            <br></br>
            <h3>Back End Proficiencies: </h3>
            <ul className='list-group w-50 mx-auto'>
                <li className='list-group-item'> APIs</li>
                <li className='list-group-item'> Node.js</li>
                <li className='list-group-item'> Express</li>
                <li className='list-group-item'> SQL & Sequelize</li>
                <li className='list-group-item'> Mongo DB & Mongoose</li>
                <li className='list-group-item'>REST</li>
                <li className='list-group-item'>GraphQL</li>
            </ul>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
