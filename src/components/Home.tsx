import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { navbar } from '../data/NavBar';
import { Link } from 'react-router-dom';

function Home(): JSX.Element {
    return (
        <div className='home-wrapper'>
            <div className="home-about-wrapper flex-center flex-1">
                <div className="home-about">
                    <h1>Benjamin Ombeni</h1>
                    <h3>Software Engineering Student</h3>
                    <h3><a className="bottom-border-onhover" href="https://www.csusm.edu/">CSUSM</a> 2022</h3>
                    <br />
                    <SocialIcon url="https://www.linkedin.com/in/benmob/" fgColor="#ffffff" className="media-icon"/>
                    <SocialIcon url="https://github.com/BenMob" bgColor="#000000" fgColor="#ffffff" className="media-icon" />
                </div>
            </div>
            <div className="flex-center flex-1" >
                <small>My Projects - </small>
                <Link to={navbar.work.link} >
                    <div className="laptop pointer" >&#128187;</div>
                </Link>
            </div>
        </div>
    )
}

export default Home
