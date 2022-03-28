import React from 'react';
export default function About() {
    return (
        <div className='container col-9'>
            <br></br>
            <h1>Projects</h1>
            <p className=''>
                A few of my projects below. <br></br> Click on the images to
                visit respective repositories, and click on View Live
                Application if available to visit the live application.
            </p>
            <br></br>
            <div className='card-group text-center'>
                <div className='card'>
                    <a
                        className=''
                        href='https://github.com/ernestosanchezCS/Ernesto-Tech-Blog-APP-MVC'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='card-img-top'
                            src='https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='App Pic'
                        />
                    </a>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <u>Tech Blog Application</u>
                        </h5>
                        <p className='card-text'>
                            This app is a CMS-style blog site similar to a
                            Wordpress site, where developers can publish their
                            blog posts and comment on other developers’ posts as
                            well. It has been deployed it to Heroku.
                        </p>
                        <a
                            className='btn'
                            href='https://techblog-ernesto.herokuapp.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <u>View Live Application!</u>
                        </a>
                    </div>
                </div>
                <div className='card'>
                    <a
                        className=''
                        href='https://github.com/ernestosanchezCS/Ernesto-E-Commerce-Back-End-ORM'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='card-img-top'
                            src='https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='App Pic'
                        />
                    </a>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <u>E-Commerce Back End</u>
                        </h5>
                        <p className='card-text'>
                            This back end service, functions as the back end for
                            an e-commerce site using Express.js API along with
                            Sequelize to interact with a MySQL database
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <a
                        className=''
                        href='https://github.com/ernestosanchezCS/Ernesto_Social_Network_API'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='card-img-top'
                            src='https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='App Pic'
                        />
                    </a>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <u>Social Network API App</u>
                        </h5>
                        <p className='card-text'>
                            This application functions as API for a social
                            network web application where users can share their
                            thoughts, react to friends’ thoughts, and create a
                            friend list. This back end app uses Express.js for
                            routing, a MongoDB database, and the Mongoose ODM.
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <a
                        className=''
                        href='https://github.com/ernestosanchezCS/Ernesto_PWA_Text_Editor'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='card-img-top'
                            src='https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='App Pic'
                        />
                    </a>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <u>Text Editor w/ Progressive Web App (PWA)</u>
                        </h5>
                        <p className='card-text'>
                            This app functions as a text editor that runs in the
                            browser. It features a number of data persistence
                            techniques that serve as redundancy in case one of
                            the options is not supported by the browser. This
                            application also function offline.
                        </p>
                        <a
                            className='btn'
                            href='https://ernesto-text-editor.herokuapp.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <u>View Live Application!</u>
                        </a>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='card-group text-center'>
                <div className='card'>
                    <a
                        className=''
                        href='https://github.com/EricFrancey/Book-Umbrella'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='card-img-top'
                            src='https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='App Pic'
                        />
                    </a>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <u>Book Club App - Book Umbrella</u>
                        </h5>
                        <p className='card-text'>
                            This app was a group collaboration effort. It has a
                            database of books and users. Users can register and
                            then can add books to their wishlist and view their
                            wishlist. Also users can add books also add comments
                            which will be added and persisted by the database.
                        </p>
                        <a
                            className='btn'
                            href=' https://book-umbrella.herokuapp.com/'
                            target='_blank'
                        >
                            <u>View Live Application!</u>
                        </a>
                    </div>
                </div>
                <div className='card'>
                    <a
                        className=''
                        href='https://github.com/ernestosanchezCS/Ernesto-SQL-Employee-Tracker'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='card-img-top'
                            src='https://images.pexels.com/photos/7710148/pexels-photo-7710148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='App Pic'
                        />
                    </a>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <u>SQL Employee Tracker App</u>
                        </h5>
                        <p className='card-text'>
                            Developers frequently have to create interfaces that
                            allow non-developers to easily view and interact
                            with information stored in databases. These
                            interfaces are called content management systems
                            (CMS). This command-line application manages a
                            company's employee database, using Node.js,
                            Inquirer, and MySQL.
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <a
                        className=''
                        href='https://github.com/ernestosanchezCS/Ernesto_DNA_Algorithm'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='card-img-top'
                            src='https://cdn.pixabay.com/photo/2013/07/18/10/59/dna-163710__340.jpg'
                            alt='App Pic'
                        />
                    </a>
                    <div className='card-body'>
                        <br></br>
                        <h5 className='card-title'>
                            <u>DNA Sequence Algorithm</u>
                        </h5>
                        <p className='card-text'>
                            An app I made to practice using a newly discovered
                            Needleman Wunsch algorithm. It takes in two DNA
                            sequences and returns the best alignment. Based on
                            user input with matcher and mismatcher scores along
                            with gap penalty. The application also has a feature
                            to generate random DNA sequences. Written in Java.
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <a
                        className=''
                        href='https://github.com/ernestosanchezCS/Ethereum_Blockchain_Lottery_Ernesto'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='card-img-top'
                            src='https://cdn.pixabay.com/photo/2017/12/14/14/23/blockchain-3019121_960_720.png'
                            alt='App Pic'
                        />
                    </a>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <u>Ethereum Lottery App</u>
                        </h5>
                        <p className='card-text'>
                            This Solidity language application built onto
                            Ethereums blockchaing (testnet) functions as a
                            lottery. Users can enter into the lottery with
                            minimun 50$ USD entry fee worth of Ethereum, through
                            web3 and their user wallets. Once the funds and
                            wallets are authenticated they can enter. Then the
                            admin -me will end the lottery at a predetermined
                            time and randomly select a winner. Using Oracle
                            services.
                        </p>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='row'>
                <p className=''>Check out my github for more!</p>
            </div>
            <br></br>
        </div>
    );
}
