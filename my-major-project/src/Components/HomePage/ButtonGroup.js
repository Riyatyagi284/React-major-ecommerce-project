import React from 'react'
import {Link} from "react-router-dom"
import "./ButtonGroup.css"

const ButtonGroup = ({YellowButtonText,YellowButtonLink,BlackButtonText,BlackButtonLink}) => {
  return (
    <div className='btn-group'>
      <Link to={YellowButtonLink}>
        <button className='yellow-btn'>{YellowButtonText}</button>
      </Link>

      <Link to={BlackButtonLink}>
        <button className='black-btn'>{BlackButtonText}</button>
      </Link>
    </div>
  )
}

export default ButtonGroup
