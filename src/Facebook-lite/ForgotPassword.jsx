import React from 'react'
import './SignUp.css'
import './ForgotPassword.css'
import { Link } from 'react-router-dom'
export const ForgotPassword = () => {
  return (
    <div className='head'>
      <div className='navbar'>
        <div className='facebook'>
          <b>facebook</b>
        </div>
        <div className='navlogin'>
          <div className='email'>
            <label>Email</label><br />
            <input type="email" placeholder='Email' />
          </div>
          <div className='password'>
            <label>Password</label><br />
            <input type="password" placeholder='password' /><br />
            <Link to="/ForgotPassword" className='forget'>Forget Password</Link>
          </div>
          <div className='login'>
            <Link to="/" className='log'><b>Login</b></Link>
          </div>
        </div>
      </div>

      <div className='mainbody'>
        <div className='main_contain'>
          <div className='text'>
            <h3>Find your account</h3>
          </div>
          <div className='line'></div>
          <div className='para'><p>Please enter your email or mobile number to search for your account.</p></div>
          <div className='inputbox'> <input type="email" className='inputbox-contain' placeholder='Email' /></div>
          <div className='line'></div>
          <div className='cancel'>
            <Link to='/'>cancel</Link>
          </div>


        </div>
      </div>
    </div>
  )
}
