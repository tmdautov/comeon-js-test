import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { login }  from '../../services/authService';

import './Login.css';



const API_URL = 'http://localhost:3001';

function Login() {
  const { setAuth } = useAuth();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  function handleSubmit(e) {
    e.preventDefault();

    login(user, pwd)
      .then((response) => {
        setAuth({ user, pwd, roles: [2001], data: response.player });
        setUser('');
        setPwd('');
        navigate(from, { replace: true });
      })
      .catch((err) => {
        alert('Incorrect credentials')
        console.log(err);
      });
  }

  return (
    <section className='login ui grid centered'>
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
        {errMsg}
      </p>
      {/* <h1>Sign In</h1> */}

      <form className='login fields' onSubmit={handleSubmit}>
        <div className='field'>
          <div className='ui icon input'>
            {/* <label htmlFor="username">Username:</label> */}
            <input
              type='text'
              id='username'
              placeholder='Username'
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <i className='user icon'></i>
          </div>
        </div>

        <div className='field'>
          <div className='ui icon input'>
            {/* <label htmlFor="password">Password:</label> */}
            <input type='password' id='password' onChange={(e) => setPwd(e.target.value)} value={pwd} required />
            <i className='lock icon'></i>
          </div>
        </div>

        <div className='field'>
          <div className='ui icon input'>
            <input type='submit' value='Login' />
            {/* <button type="submit">Login</button> */}
            <i className='right chevron icon'></i>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Login;
