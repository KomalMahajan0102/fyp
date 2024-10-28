import React from 'react'
import './AboutHeader.css'
function AboutHeader() {
  return (
    <div className='AboutHeader'>
        <div className='AboutHeader-desc'>
            <h1>Eat today</h1>
            <h2>Live another day</h2>
            <p>Savor today delights, flourish tomorrow! Relisg flavors, nourish <br />
                joy, and embrance vibrant vitality on your jorney.</p>
            <div className='AboutHeader-buttons'>
                <div>Contact Us </div>
                <div>Join Us</div>
            </div>
        </div>
        <div className='AboutHeader-image'>
            <div className='circles'>
                <div>
                 <div className='circle c1'></div>
                <div className='circle c2'></div>
                <div className='circle c3'></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutHeader
