import React, { useState } from 'react'
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { AiOutlineEye } from "react-icons/ai"
import { Link } from "react-router-dom"



const loginForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const { email, password } = formData

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }
  return (
    <>
      {/* Tab */}
      <Tab />

      {/* Form */}
      <div className='form'>
        <form onSubmit={submitHandler} className="form">
          <label>
            <p>Email Address <sub>*</sub></p>
            <input
              required
              type="text"
              name='email'
              value={email}
              onChange="changeHandler"
              placeholder='Enter Your Email Address'
            />
          </label>


          <label>
            <p> Password <sub>*</sub></p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name='email'
              value={password}
              onChange="changeHandler"
              placeholder='Enter Your Password'
            />
            <span>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>

            <Link to="/forgot-Password">
              <p> Forgot Password </p>
            </Link>
          </label>

          <button className="login-btn" type="submit"> Login </button>
        </form>
      </div>
    </>
  )
}

export default loginForm