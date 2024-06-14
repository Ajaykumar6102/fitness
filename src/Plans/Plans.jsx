import React from 'react'
import './Plans.css'
import {plansData} from '../../src/data/plansData'
import whiteTick from '../../src/assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-cointainer">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>
        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i} >
                    {plan.icon}
                    <span>{plan.name}</span>
                         <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, ) =>(
                            <div className="feature, i">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}

                    </div>
                   
                </div>
            )
            )}
        </div>

    </div>
  )}

export default Plans