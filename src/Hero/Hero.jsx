import React from 'react'
import './Hero.css'
import Header from '../header/Header'
import hero_image from "../../src/assets/hero_image.png"
import hero_image_back from "../../src/assets/hero_image_back.png"
import Heart from "../../src/assets/heart.png"
import calories from "../../src/assets/calories.png"
import background_image from '../assets/gym_image.jpg'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'



const Hero = ({books}) => {
  const transition = {type: 'spring',duration : 3}
  
  return (
    <div className='Hero' style={{backgroundImage: 'url(${background_image})'}}>

    
        <div className='left-h'>

            <Header />

            
            
            <div className="the-best-ad">
              <motion.div
              initial ={{left: '238px'}}
              whileInView={{left: '8px'}}
              transition={{...transition,type: 'tween'}}
              ></motion.div>
              <span>the best fitness club in the town</span>
            </div>
            <div className="hero-text">
              <div>
                <span className='stroke-text'>shape</span>
                <span>Your</span>
              </div>
              <div> <span>Ideal body</span></div>
              <div>
                <span>
                  In here we will help you to shape and build your ideal and live up your life to fullest
                </span>
              </div>
          </div>
          <div className="figures">
            <div>
              <span>+140</span>
              <span>expert coaches</span>
            </div>
            <div>
              <span>+978</span>
              <span>members joined</span>
            </div>
            <div>
              <span>+50</span>
              <span>fitness programs</span>
            </div>
          </div>
       
          <div className="hero-buttons">
           <Link to="/registeration"><buttons className="btn">admin</buttons></Link>
           <Link to="/login"><button className="btn">Login</button></Link>
           <Link to="/ajay"><button className="btn">Sign in</button></Link>
            <button className="btn">learn more</button>
          </div>
      </div> 
      
        <div className='right-h'>
          <button className='btn'> join now</button>
          <motion.div 
          whileInView={{right:"4rem"}}
          transition={{transition}}

          className="heart-rate">
            <img src={Heart} alt="" />
            <span>heart rate</span>
            <span>168 bpm</span>
          </motion.div>
          <img src={hero_image} alt="" className='hero-image' />
          <motion.img
          initial ={{right:'11rem'}}
          whileInView={{right:'20rem'}}
          transition={transition}></motion.img>
          <img src={hero_image_back} alt=""  className='hero-image-back'/>
          <motion.div 
          initial={{right:"37rem"}}
          whileInView={{right:"28rem"}}
          transition={transition}
          className="calories">
            <img src={calories} alt="" />
            <span>calories burned</span>
            <span>220 kcal</span>
          </motion.div>
      </div>
      
    </div>
  )
}

export default Hero