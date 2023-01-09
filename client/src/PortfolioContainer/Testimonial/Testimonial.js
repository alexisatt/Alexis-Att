import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import shape from "./shape-bg.png";
import "./Testimonial.css";


export default function Testimonial(props) {

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen!==props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options ={
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            1000:{
                items:3,
            },
        }
    }

  return (
    <div>
        <ScreenHeading title={'Testimonials'} subHeading={'What My Clients Say About Me'} />
        <section className='testimonial-section fade-in' id={props.id || ''}>
            <div className='container'>
                <div className='row'>
                    <OwlCarousel className='owl-carousel' id='testimonial-carousel' {...options}>
                    <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>"Alexis and I worked together on several projects, and because of her excellent problem-solving skills and attention to detail, all projects went by easy. Alexis will always give 100 percent of her effort for any project you throw her way. Her ability to adapt and learn new skills always was a plus. I highly recommend working with her!"
                                    </p>
                                    <ul className='stars list-unstyled'>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                    </ul>
                                </div>
                                <div className='client-info'>
                                    <img src="img/blank-icon.jpeg" alt="no image found"></img>
                                    <h5>Nicole G.</h5>
                                    <p>Sr. Front-End Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>"When you need a professional, attractive, and up-to-date website, Alexis is a go-to resource to build it. Her attention to detail, communication skills and creative problem-solving have proved invaluable to our team as we strive to make it easy for our stakeholders to find the tools and information they need. She listens to capture the essence of what the team needs, provides reasonable completion dates and delivers on time. A friendly colleague and capable collaborator, Alexis is easy to work with and gets the job done right!"
                                    </p>
                                    <ul className='stars list-unstyled'>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                    </ul>
                                </div>
                                <div className='client-info'>
                                    <img src="img/blank-icon.jpeg" alt="no image found"></img>
                                    <h5>Geoff P.</h5>
                                    <p>Communications Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>"From the start, it was clear that Alexis was a highly skilled and experienced developer. Her knowledge of front-end technologies was impressive, and she was able to translate complex design concepts into intuitive and functional interfaces. She took the time to carefully review her work and ensure that everything was up to the highest standards."
                                    </p>
                                    <ul className='stars list-unstyled'>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                        <li>
                                            <i className='bi bi-star-fill'/>
                                        </li>
                                    </ul>
                                </div>
                                <div className='client-info'>
                                    <img src="img/blank-icon.jpeg" alt="no image found"></img>
                                    <h5>Akshay C.</h5>
                                    <p>Sr. Engineer</p>
                                </div>
                            </div>
                        </div>
                 


                    </OwlCarousel>
                </div>
            </div>
        </section>
        <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  )
}
