import React from 'react'
import Template from '../components/core/Auth/Template'
import loginImag from "../assets/Images/login.webp"

const Login = () => {
  return (
    <div>
        <Template
            title = "Welcome Back"
            description = "Build skills for tody, tomorrow, and beyond."
            description2 = "Eductaion to future-proof your career."
            image = {loginImag}
            formType = "login"
        />
    </div>
  )
}

export default Login