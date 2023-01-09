import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://github.com/alexisatt'>
                            <i className='bi-github'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/alexis-attardo/'>
                            <i className='bi bi-linkedin'></i>
                        </a>
                    </div>
                </div>
        

        <div className='profile-details-name'>
            <span className='primary-text'>
                {" "}
                Hello, I'M <span className='highlighted-text'>Alexis Attardo</span>
            </span>
        </div>
        <div className='profile-details-role'>
            <span className='primary-text'>
                {" "}
                <h1>
                {" "}
                <Typical 
                loop={Infinity}
                steps={[
                    "Frontend Developer 👩🏼‍💻",
                    1000,
                    "Passionate UI Developer 🎨",
                    1000,
                    "Problem Solver 🧩",
                    1000,
                    "Based In NYC 🗽",
                    1000,
                    "Advid Tech Learner 🌱",
                    1000,
                ]}/>
                </h1>
            </span>
            <span className='profile-role-tagline'>
                Drive for building applications to solve your needs.
            </span>
        </div>
        <div className='profile-options'>
            <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                {""}
                Contact {" "}
            </button>
            <a href='Resume-2022.pdf' download='Alexis-Attardo Resume-2022.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
            </a>
        </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'>
            </div>
        </div>
        </div>
    </div>
  )
}
