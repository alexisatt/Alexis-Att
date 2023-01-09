import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props){
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen!==props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
            </div>
            <div className="resume-heading-description">
              <a>{props.link ? props.link : ""}</a>
            </div>
          </div>
        );
      };
    
    const resumeBullets = [
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
        {label: "Education", logoSrc: "education.svg"},
    ];
    const programmingSkillDetails = [
        {skill: "Javascript", ratingPercentage: 95},
        {skill: "React JS", ratingPercentage: 80},
        {skill: "jQuery", ratingPercentage: 95},
        {skill: "Node JS", ratingPercentage: 90},
        {skill: "Express JS", ratingPercentage: 82},
        {skill: "Vue JS", ratingPercentage: 82},
        {skill: "SQL", ratingPercentage: 80},
        {skill: "HTML5", ratingPercentage: 95},
        {skill: "CSS/SASS", ratingPercentage: 95},

    ];

    const projectDetails = [
        {title: "SBP Platform",
         duration: {fromDate:"2021", toDate:"2021"},
         description:"Developed application for employee to have a clean and organized way to see information for their given branch. ",
         link:<a href='https://www.youtube.com/watch?v=9ueeqh4o0ZA&ab_channel=AlexisAttardo' target="_blank">Demo Video</a>,
         subHeading:"Technologies Used: Javascript, Bootstrap, SPServices (XML)  "
        
        },
        {title: "Asset Management Website",
        duration: {fromDate:"2021", toDate:"2021"},
        description:"For this project, I wanted to let this team within our company to have their own brand identity. To do this, I created a clean - sharp website that they could be proud of.  ",
        link:<a href='https://www.youtube.com/watch?v=f7AW1lQwkcg&ab_channel=AlexisAttardo' target="_blank">Demo Video</a>,
        subHeading:"Technologies Used: Javascript, Bootstrap  "
       
       },
        {title: "Post-it App",
        duration: {fromDate:"2022", toDate:"2022"},
        description:"For this project, I created a simple clean post it tracking application.",
        link:<a href='https://github.com/alexisatt/post-it-app' target="_blank">Repo</a>,
        subHeading:"Technologies Used: React  "
       
       },
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="work-experience">
            <ResumeHeading 
            heading={"FullBeauty Brands"}
            subHeading={"Website Developer"}
            fromDate={"2021"}
            toDate={"present"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Currently working as a website and mobile developer.
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                - Developed and maintained all web pages for designated brands, optimizing
cross-browser and multi-platform compatibility
                </span>
                <br />
                <span className='resume-description-text'>
                - Collaborated with UI and ecommerce team to produce high quality sites
                </span>
                <br />
                <span className='resume-description-text'>
                - Implemented the use of HTML, CSS, Bootstrap, Javascript and jQuery to make
advanced website features on SFCC.
                </span>
         

            </div>
            
     
        </div>,
        <div className='resume-screen-container programming-skills-container' key="programming-skills">
            {programmingSkillDetails.map((skill,index)=>(
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{width: skill.ratingPercentage + "%"}}
                        className="active-percentage">

                        </div>
                    </div>
                </div>
            ))}
                
        </div>,
        <div className='resume-screen-container' key="projects">
{projectDetails.map((projectDetails, index)=>(
    <ResumeHeading 
    key={index}
    heading={projectDetails.title}
    link={projectDetails.link}
    subHeading={projectDetails.subHeading}
    description={projectDetails.description}
    
    fromDate={projectDetails.duration.fromDate}
    toDate={projectDetails.duration.toDate}
    />
    
))}
        </div>,
        <div className='resume-screen-container' key="interests">
            <ResumeHeading
            heading='Cycling'
            description='Apart from being a tech enthusiast and user interface guru, I also thoroughly enjoy fitness. I find that cycling, dancing or any form of working out really is such a good way to stay sharp'
            />
            <ResumeHeading
            heading='Music'
            description='I absolutely appreciate the art of music. There is nothing better than putting on a great song to lift up your day. I always like to start my days off with something lowkey; Coldplay, Daughtry, FRENSHIP, OneRepublic - that sort of thing. By the end of the day my music tastes turn more upbeat and techno to really drive me through anything.'
            />
            <ResumeHeading
            heading='Traveling'
            description="If I'm not moving around in NYC odds are I'm on the go exploring somewhere new or planning my next big trip. There's no better feeling than traveling around the world and visiting other countries."
            />
        </div>,
        <div className='resume-screen-container' key="education">
            <ResumeHeading 
            heading={"Rutgers University"}
            subHeading={"Certification in Full Stack Development"}
      
            />
            <ResumeHeading 
            heading={"Middlesex County College"}
            subHeading={"Associate's Degree"}
   
            />

        </div>,
      
    ];
    const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };
 
    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../../assets/Resume/${bullet.logoSrc}`)}
              alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };

      const getResumeScreens = () => {
        return (
          <div
            style={carousalOffSetStyle.style}
            className="resume-details-carousal"
          >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };

      useEffect(() => {
        return () => {
          /* UNSUBSCRIBE THE SUBSCRIPTIONS */
          fadeInSubscription.unsubscribe();
        };
      }, [fadeInSubscription]);
    return (
        <div className='resume-container screen-container fade-in' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'Professional Details'}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                             <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>

                    <div className='resume-bullet-details'>{getResumeScreens()} </div>
                </div>
            </div>
        </div>
    )
}