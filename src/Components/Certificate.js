import React from 'react'
import './Styles/Certificate.css'
import certificate from '../Assests/certificate.svg'
const Certificate = ({name}) => {
  return (
    <div className='cert-cont'>
      <div className='cert-head'>{`Certify your ${name} Mastery`}</div>
      <div className='cert-text'>{`Complete the ${name} course with assignments, and request your course completion certificate through the learning portal.`}</div>
      <div className='cert-img'>
        <img src={certificate} alt='certificate' />
      </div>
    </div>
  )
}

export default Certificate