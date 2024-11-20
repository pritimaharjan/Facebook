import React from 'react'
import"./Login.css"
import { Link } from 'react-router-dom'
export const Login = () => {
  return (
    <div className='loginpage'>
      <div className='main'>
        <div className='sidebar'>

          <div className='facebookt'>
            facebook
          </div>
          <div className='para'>
            Facebook helps you to connect and share with the people in your life.
          </div>
        </div>

        <div className='body'>
          <div className='container'>
          <div className='info'>
          <input className='input' type="text"  placeholder='UserName' />
          <input className='input' type='password' placeholder='Password'></input>
          </div>
          <div className='button'>

            <Link to='/home'>Log in</Link>
          </div>
          <div className='password'>
            {/* <button className='forgetpassword'>Forgotten Password?</button> */}
            <Link to='/ForgetPassword' className='forgetpassword'>Forgotten Password?</Link>
          </div>
          </div>
          <div className='account'>
            <Link to="/SignUp" className='newaccount'>Create new account </Link>
            {/* <button className='newaccount'>Create new account</button> */}
          </div>
        </div>

      </div>
    </div>

  )
}
