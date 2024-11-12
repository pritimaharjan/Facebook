import React from 'react'
import "./SignUp.css"
import logo from './logo/images.png'
import { Link } from 'react-router-dom'
export const SignUp = () => {
  return (
    <div className='head'>
      <div className='navbar'>
        <div className='facebook'>
          <b>facebook</b>
        </div>
        <div className='navlogin'>
          <div className='email'>
            <text>Email</text><br />
            <input type="email" placeholder='Email' />
            {/* <input type="checkbox" name="logged in" id="loggedin" /> */}
          </div>
          <div className='password'>
            <text>password</text><br />
            <input type="password" placeholder='password' /><br />
            <Link to="/ForgotPassword" className='forget'>Forget Password</Link>
          </div>
          <div className='login'>
            <Link to="/" className='log'><b>Login</b></Link>
          </div>
        </div>
      </div>
      <div className='body1'>
        <div className='sidebar1'>
          <img src={logo}/>
          <text><b>Heading out? Stay connected</b> <br></br>
            Visit Facebook.com on your mobile phone.
          </text>
        </div>
        <div className='form'>
          <div className='title'>
            <h1>Sign Up</h1>
            it's free and always will be.
          </div>
          <div className='input2'>
            <input type="text" className='input1' placeholder='User Name' />
            <input type="email" className='input1' placeholder='Email' />
            <input type="password" className='input1' placeholder='password' />
            <input type="password" className='input1' placeholder='Confrim Password' />

          </div>
          <div className='birthday'>
            <text>Birthday</text><br />
            <input type="date" className='dob' name="DOB" id="DOB" />
          </div>
          <div className='gender'>
            <input type="radio" name="gender" id="female" value="female" />
            <label For="female" id='female'>Female</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>

          </div>
          <div className='para1'>
            <p className='para1'>By Signup, you agree to our trems and that you have read our Data policy, including our Cookie use.</p>
          </div>
          <div>
            <button>signup</button>
          </div>
        </div>

      </div>

    </div>
  )
}
