import { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { login }  from '../../services/authService';

import './Login.css';

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
        setAuth({ user, pwd, data: response.player });
        setUser('');
        setPwd('');
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setErrMsg('Incorrect credentials or server is not available. Please try again');
      });
  }

  return (
    <section className='login ui grid centered'>
      <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
        {errMsg}
      </p>

      <form className='login fields' onSubmit={handleSubmit}>
        <div className='field'>
          <div className='ui icon input'>
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
            <input type='password' id='password' onChange={(e) => setPwd(e.target.value)} value={pwd} required />
            <i className='lock icon'></i>
          </div>
        </div>

        <div className='field'>
          <div className='ui icon input'>
            <input type='submit' value='Login' />
            <i className='right chevron icon'></i>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Login;
