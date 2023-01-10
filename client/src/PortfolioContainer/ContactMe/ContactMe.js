import React, {useState} from 'react'
import axios from 'axios';
//import {toast} from 'react-toastify';

import imgBack from '../../images/mailz.jpeg';
import load1 from '../../images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import Typical from 'react-typical';


import './ContactMe.css';

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen!==props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)

    const handleName = (event)=>{
        setName(event.target.value);
    }
    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handleMessage = (event)=>{
        setMessage(event.target.value);
    }
    //console.log(name)
    const sumbitForm = async(event)=>{
        event.preventDefault();
       
        //console.log(data);
    }

  return (
    <div className='main-container fade-in' id={props.id || ''}>
        <ScreenHeading 
        subHeading={"Reach Out to Me"}
        title={'Contact Me'}
        />
        <div className='central-form'>
            <div className='col'>
            <h2 className='title'>
                {" "}
                <Typical 
                loop={Infinity}
                steps={[
                    "Get In Touch ✉️",
                    1000,
                ]}/>
                </h2>
                <a href='https://github.com/alexisatt'>
                    <i className='bi-github'></i>
                </a>
                <a href='https://www.linkedin.com/in/alexis-attardo/'>
                    <i className='bi bi-linkedin'></i>
                </a>
            </div>
            <div className='back-form'>
                <div className='img-back'>
                    <h4>Send Your Email Here!</h4>
                    <img src={imgBack} alt='image not found' />

                </div>
                <form onSubmit={sumbitForm}>
                    <p>{banner}</p>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    onChange={handleName}
                    value={name}/>
                    <label htmlFor='email'>Email</label>
                    <input type='email'
                    onChange={handleEmail}
                    value={email}/>
                   

                    <div className='send-btn'>
                    <button onClick={() => window.location = 'mailto:alexisattardo@gmail.com'} target="_blank" type='submit'>
                            send
                        {bool?(<b className='load'>
                            <img src={load1} alt='image not found' />
                        </b>):("")}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
