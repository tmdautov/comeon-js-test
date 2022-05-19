import styles from './Login.module.css'; 

const API_URL = 'http://localhost:3001';

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      });
    
  }

  return(
    <form className={styles.login} onSubmit={handleSubmit}>
      <div><input type="text" placeholder="Login"/></div>

      <div><input type="text" placeholder="Password"/></div>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;