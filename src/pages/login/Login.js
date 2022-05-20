
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import styles from './Login.module.css'; 

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
  const from = location.state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    // fetch(API_URL)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   });    

      const options = {
        username: 'rebecka',
        password: 'secret'
      }

      fetch(`${API_URL}/login`, {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(response => response.json()) 
      .then(response => {
        console.log(response)
        // const accessToken = response?.data?.accessToken;
        // const roles = response?.data?.roles;
        setAuth({ user, pwd, roles: [2001], 'accessToken': '123' });
        // navigate(from, { replace: true });
        setUser('');
        setPwd('');
        navigate(`/games/`);
      })
      .catch(err => {
        // alert('Incorrect credentials')
        console.log(err)
      });  
  }

  return(
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign In</h1>
      <form className={styles.login} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Login" ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} required/>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </section>
    
  );
}

export default Login;