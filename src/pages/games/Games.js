import React, {useState, useEffect} from 'react';
import useAuth from '../../hooks/useAuth';
import styles from './Games.css'; 
import { Link } from 'react-router-dom';

function Games() {
  const { auth, setAuth } = useAuth();
  let [games, setGames] = useState([]);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/games")
    	.then(response => response.json())
    	.then(data => {
        console.log(data)
        setGames(data)
      });
  },[]);


  useEffect(() => {
    fetch("http://localhost:3001/categories")
    	.then(response => response.json())
    	.then(data => {
        console.log(data)
        // setGames(data)
        setCategories(data)
      });
  },[])

  function logout() {
    // console.log('logout')
    setAuth(null);
  }

  return(
    <div className="casino">
      
      <section className="ui grid centered">
          <div className="twelve wide column">
          <div className="ui list">
            <div className="player item">
              <img className="ui avatar image" src={`../../${auth.data.avatar}`} alt="avatar" />
              <div className="content">
                <div className="header"><b className="name">{auth.data.name}</b></div>
                <div className="description event">{auth.data.event}</div>
              </div>
            </div>
          </div>
          <div className="logout ui left floated secondary button inverted" onClick={logout}>
            <i className="left chevron icon"></i>
            <span>Log Out</span>
          </div>
        </div>
      </section>

      <section className="ui grid">
          <div className="twelve wide column">
            <h3 className="ui dividing header">Games</h3>
            <div className="ui relaxed divided game items links">
              {games.map(({ name, description, icon, code }) =>
                <div key={code} className="game item">
                  {/* <img src={icon} alt="game-icon"></img> */}
                  <div className="ui small image">
                    <img src={`../../${icon}`} alt="game-icon" />
                  </div>
                  <div className="content">
                    <div className="header"><b className="name">{name}</b></div>
                    <div className="description">
                      {description}
                    </div>
                    <div className="extra">
                      <Link to={`/game/${code}`} className="play ui right floated secondary button inverted">
                        Play
                        <i className="right chevron icon"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="four wide column">
            <h3 className="ui dividing header">Categories</h3>
            <div className="ui selection animated list category items">
             <pre>{ JSON.stringify(categories, null, 2) }</pre>
            </div>
          </div>
        
      </section>

      <section>
        
      </section>
      
    </div>
  );
}

export default Games;