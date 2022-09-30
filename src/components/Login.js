import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [cred, setCred] = useState({
        username: '',
        password: ''
    });

    const handleChange = (evt) => {
        setCred({ ...cred, [evt.target.name]: evt.target.value})
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:9000/api/login`, cred)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            navigate('/friends')
        })
        .catch((err) => {
            console.log(err);
        })

    };

    return(
      <div className='login-container'>
        <h2>Login</h2>
        <form className='form' onSubmit={handleSubmit}>
          Username
          <input 
            type='text'
            name='username'
            onChange={handleChange}
          />
          Password
          <input
            type='password'
            name='password'
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }

  export default Login;