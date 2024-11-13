import React, { useState } from 'react';
import "./SignUp.css";
import logo from './logo/images.png';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const [formInput, setFormInput] = useState({
    Username: "",
    email: "",
    password: "",
    confirmPassword: "",
    successMgs: ""
  });
  const [formError, setFormError] = useState({
    Username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validationFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      Username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    if (!formInput.Username.trim()) {
      inputError.Username = "Username cannot be empty";
    }

    if (!formInput.email.trim()) {
      inputError.email = "Enter a valid email";
    }

    if (!formInput.password) {
      inputError.password = "Password cannot be empty";
    }

    if (formInput.confirmPassword !== formInput.password) {
      inputError.confirmPassword = "Passwords do not match";
    }

    if (inputError.Username || inputError.email || inputError.password || inputError.confirmPassword) {
      setFormError(inputError);
    } else {
      setFormError({});
      setFormInput({ ...formInput, successMgs: "Signup successful!" });
    }
  };

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

      <div className='body1'>
        <div className='sidebar1'>
          <img src={logo} alt="logo" />
          <p><b>Heading out? Stay connected</b> <br />
            Visit Facebook.com on your mobile phone.
          </p>
        </div>
        <div className='form'>
          <div className='title'>
            <h1>Sign Up</h1>
            <p>It's free and always will be.</p>
          </div>
          
          <form className='input2' onSubmit={validationFormInput}>
            <input
              type="text"
              className='input1'
              placeholder='User Name'
              value={formInput.Username}
              onChange={({ target }) => handleUserInput(target.name, target.value)}
              name='Username'
            />
            <p className='error-mgs'>{formError.Username}</p>

            <input
              type="email"
              className='input1'
              placeholder='Email'
              value={formInput.email}
              onChange={({ target }) => handleUserInput(target.name, target.value)}
              name='email'
            />
            <p className='error-mgs'>{formError.email}</p>

            <input
              type="password"
              className='input1'
              placeholder='Password'
              value={formInput.password}
              onChange={({ target }) => handleUserInput(target.name, target.value)}
              name='password'
            />
            <p className='error-mgs'>{formError.password}</p>

            <input
              type="password"
              className='input1'
              placeholder='Confirm Password'
              value={formInput.confirmPassword}
              onChange={({ target }) => handleUserInput(target.name, target.value)}
              name='confirmPassword'
            />
            <p className='error-mgs'>{formError.confirmPassword}</p>

            <div className='birthday'>
              <label>Birthday</label><br />
              <input type="date" className='dob' name="DOB" id="DOB" />
            </div>

            <div className='gender'>
              <input type="radio" name="gender" id="female" value="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male">Male</label>
            </div>

            <div className='para1'>
              <p>By signing up, you agree to our terms and that you have read our Data Policy, including our Cookie use.</p>
            </div>

            <button type='submit'>Sign Up</button>
          </form>

          {/* <Link to='/'>Go back</Link> */}
          {formInput.successMgs && <p className='success-mgs'>{formInput.successMgs}</p>}
        </div>
      </div>
    </div>
  );
};
