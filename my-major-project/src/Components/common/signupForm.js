import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from "react-hot-toast"
import Tab from "../common/Tab"
import { ACCOUNT_TYPE } from "../utils/constant"




const signupForm = () => {

    //student or instructor
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showconfirmPassword, setShowConfirmPassword] = useState(false)

    const { firstName, lastName, email, password, confirmPassword } = formData

    //handle input fields, when some value changes
    const changeHandler = (e) => {
        setFormData((prevData) => ({
            ...prevData, [e.target.name]: e.target.value,
        }))
    }
    //handle form submission
    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error("Password do not match")
            return
        }
        const signupData = {
            ...formData,
            accountType,
        }
        //setting signup data to state
        dispatch(setSignupData(signupData))
        dispatch(sendOtp(formData.email, navigate))

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
        setAccountType(ACCOUNT_TYPE.STUDENT)
    }

    //pass data to tab component

    const tabData = [
        {
            id: 1,
            tabName: "student",
            type: ACCOUNT_TYPE.STUDENT,
        },
        {
            id: 2,
            tabName: "instructor",
            type: ACCOUNT_TYPE.INSTRUCTOR,
        }
    ]

    return (

        <>
    {/* Tab */}
            <Tab tabData={tabData} field={accountType} setField={setAccountType} />

    {/* Form */}
            <form onSubmit={submitHandler} className='form'>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input
                        required
                        type="text"
                        name='firstName'
                        value={firstName}
                        onChange="changeHandler"
                        placeholder='Enter Your First Name'
                    />
                </label>

                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input
                        required
                        type="text"
                        name='lastName'
                        value={lastName}
                        onChange="changeHandler"
                        placeholder='Enter Your Last Name'
                    />
                </label>

                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name='email'
                        value={email}
                        onChange="changeHandler"
                        placeholder='Enter email address'
                    />
                </label>

                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        value={password}
                        onChange="changeHandler"
                        placeholder='Enter password'
                    />
                    <span onChange="changeHandler">
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>

                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type={showconfirmPassword ? ("text") : ("password")}
                        name='password'
                        value={password}
                        onChange="changeHandler"
                        placeholder='Confirm password'
                    />
                    <span onChange="changeHandler">
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>

                </label>

                <button className='login-btn'> Create Account </button>
            </form>
        </>
    )
}

export default signupForm
