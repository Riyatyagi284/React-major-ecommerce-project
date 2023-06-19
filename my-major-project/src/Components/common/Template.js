import React from 'react'
import signupForm from '../../Components/common/signupForm'
import loginForm from '../../Components/common/loginForm'

const Template = ({title,description1,description2,image,formType}) => {
  return (
    <>
    <div className='Template-left'>
      <h1 className='Template-heading'>{title}</h1>
      <p className='Template-para'>
      <span className='span1'>{description1}</span>
      <span className='span'>{description2}</span>
      </p>
      {formType==="signup"?(signupForm):(loginForm)}
    </div>

    <div className='Template-right'>
        <img className='template-image' src={image} alt="signup-girl"/>
    </div>

    </>
  )
}

export default Template
