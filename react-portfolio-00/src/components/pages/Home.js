import React from 'react';
import homePic from '../../Assets/images/IMG_5302.jpeg';

export default function Home() {
    return (
        <div className='container col-9'>
            <br></br>
            <div className='row bg-dark bg-gradient rounded'>
                <h1 className='col-7 text-white mt-auto mb-auto'>
                    <h1 className='text-center profileName'>
                        Hello! <br></br>I'm Ernesto Sanchez <br></br> Wecome to
                        my Portfolio!
                    </h1>
                </h1>
                <img
                    src={homePic}
                    alt='me'
                    className=' m-2 rounded-circle img-fluid col-3 '
                />
            </div>
            <br></br>
            <h1 className='profileName'>About Me</h1>
            <p>
                <br></br>
                Hello! My name is Ernesto. I am 28 years old.<br></br>
                <br></br>I am a recent graduate of the Full Stack Web
                Development Bootcamp at the University of Toronto. I am
                currently looking for a full-time position in relation to
                full-stack development in the Toronto, Ontario area however I am
                open to possible relocation.<br></br>
                <br></br> I have been working with software for most of my life
                and I have always had a passion for technology. Most recently I
                have been self employed providing programming tutoring for kids
                in C++ for highschool students. Although I have been coding for
                some time, I have not actually worked as an official software
                developer. During my studies in Electrical Engineering at
                Carleton University; C++, Java and Python were heavily used,
                along with your typical engineering languages such as MATLAB. I
                believe it was around then when I knew developing software was
                something I really enjoyed. I realized it was something I could
                enjoy making a career of and so I focused my efforts on becoming
                a developer and building software. I have not looked back since,
                theres something quite satifying about working with and
                finishing a really good project. I can definitly be considered
                as one of the computer nerds. <br></br>
                <br></br>I am a self-motivated and a good team player. One of my
                strengths is my ability to learn new things quickly and always
                in pursuit to improve my skills. I am a hard worker and I am
                always willing to work hard to achieve my goals. I consider
                myself a team player and always willing to work with others to
                achieve common interests. <br></br>
                <br></br> In terms of future goals, I would love to participate
                in a real world full stack application. Given an opportunity I
                like to compete with others, I feed off other peoples hard work
                which then pushes me to try to be better. Ideally I would like
                to work in a team environment where striving to build a better
                product is a priority.
                <br></br>
                <br></br>
                Ernesto Sanchez.
                <br></br>
                <br></br>
            </p>
        </div>
    );
}
