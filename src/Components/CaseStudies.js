import React from 'react'
import './Styles/CaseStudies.css'
import Carousel from './Carousel'
const CaseStudies = () => {
  return (
    <div className='cs-cont'>
      <div className='cs-head'>Case Studies</div>
      <div className='cs-text'>Explore Student’s Inspiring Work</div>
      <Carousel />
    </div>
  )
}

export default CaseStudies