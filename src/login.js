import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Profil from './profil'
import axios from 'axios';

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate()

  const onButtonClick = async () => {
    // Set initial error values to empty
    setEmailError('')
    setPasswordError('')
  
    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }
  
    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
  
    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return;
    }
  
    try {
      // Make API call to authenticate user
      const res = await axios.get('http://localhost:5094/api/Employees/GetEmployee', {
        params: {
          email: email,
          password: password
        }
      });
      // Assuming your backend returns a success message or user data upon successful login
      if (res.data.success) {
        // Redirect to profile page upon successful login
        navigate('/profil');
      } else {
        // Handle invalid credentials or other errors
        // Example: setPasswordError('Invalid credentials');
        console.log(res.data.error); // Log the error message from backend
      }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          type='password'
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login