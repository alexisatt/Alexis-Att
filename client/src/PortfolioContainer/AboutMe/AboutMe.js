import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen!==props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "Hello, My name is Alexis and I am a Front-End/UI Developer with a MERN stack - based in New York City. I'm always excited to start a new project and build applications with utmost efficiency.  ",
        highlights:{
            bullets: [ "Front-end: Javascript, HTML5, CSS, SASS, jQuery, ",
            "Frameworks: React.js, Vue.js, Material UI, Bootstrap",
            "Back-end: Node.js, Express, SQL, AJAX, Git, RESTful API",
            "Databases: MongoDb, dbeaver, Heroku, Firebase",
            "Creative: Adobe (Photoshop, AdobeXD)",
            "Additional: Salesforce, Wordpress, Sharepoint, cPanel",
            ],
            heading: "Highlights:"
        }
    }
    const renderHighlight = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-bullet'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
            <div className='about-me-card'>
                <div className='about-me-profile'> </div>
                <div className='about-me-details'>
                    <span className='about-me-description'>
                        {SCREEN_CONSTANTS.description}
                    </span>
                    <div className='about-me-highlights'>
                    <div className='highlight-heading'>
                        <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                    </div>
                   
              
                    {renderHighlight()}
                </div>
                <div className='about-me-options'>
                    <a href='https://github.com/alexisatt?tab=repositories' target="_blank">
                <button className='btn primary-btn'> Projects  </button>
                </a>
            <a href='Resume-2022.pdf' download='Alexis-Attardo Resume-2022.pdf'>
                <button className='btn primary-btn'>Get Resume</button>
            </a>
                </div>
                </div>
            </div>
        </div>

    </div>
  );
}
