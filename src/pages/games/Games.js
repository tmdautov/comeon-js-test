import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import styles from './Games.css';
import { Link } from 'react-router-dom';

import { logout }  from '../../services/authService';
import {getGameList, getCategoyList}  from '../../services/gameService';


function Games() {
  const { auth, setAuth } = useAuth();
  let [games, setGames] = useState([]);
  let [filteredGames, setFilteredGames] = useState([]);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    getGameList().then((data) => {
      setGames(data)
      setFilteredGames(data);
    });
  }, []);

  useEffect(() => {
    getCategoyList().then(data => {
      setCategories(data);
    })
  }, []);

  function onLogoutClick() {
    logout().then(data => {
      setAuth(null);
    })
  }

  function changeCategories(id) {
    filteredGames = games.filter((game) => {
      return game.categoryIds.includes(id);
    });
    setFilteredGames(filteredGames);
  }

  function handleSearch(evt) {
    const searchValue = evt.target.value;
    filteredGames = games.filter((game) => {
      return game.name.toLowerCase().includes(searchValue);
    });
    setFilteredGames(filteredGames);
  }

  return (
    <div className='casino'>
      <section className='ui grid'>
        <div className='twelve wide column'>
          <div className='ui list'>
            <div className='player item'>
              <img className='ui avatar image' src={`../../${auth.data.avatar}`} alt='avatar' />
              <div className='content'>
                <div className='header'>
                  <b className='name'>{auth.data.name}</b>
                </div>
                <div className='description event'>{auth.data.event}</div>
              </div>
            </div>
          </div>
          <div className='logout ui left floated secondary button inverted' onClick={onLogoutClick}>
            <i className='left chevron icon'></i>
            <span>Log Out</span>
          </div>
        </div>
        <div className='four wide column'>
          <div className='search ui small icon input '>
            <input onChange={handleSearch} name='search' type='text' placeholder='Search Game' />
            <i className='search icon'></i>
          </div>
        </div>
      </section>

      <section className='ui grid'>
        <div className='twelve wide column'>
          <h3 className='ui dividing header'>Games</h3>
          <div className='ui relaxed divided game items links'>
            {filteredGames.map(({ name, description, icon, code }) => (
              <div key={code} className='game item'>
                <div className='ui small image'>
                  <img src={`../../${icon}`} alt='game-icon' />
                </div>
                <div className='content'>
                  <div className='header'>
                    <b className='name'>{name}</b>
                  </div>
                  <div className='description'>{description}</div>
                  <div className='extra'>
                    <Link to={`/game/${code}`} className='play ui right floated secondary button inverted'>
                      Play
                      <i className='right chevron icon'></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <nav className='four wide column'>
          <h3 className='ui dividing header'>Categories</h3>
          <div className='ui selection animated list category items'>
            {categories.map(({ id, name }) => (
              <div
                key={id}
                className={(id === 1 ? 'clicked ' : '') + `category item`}
                onClick={() => changeCategories(id)}
              >
                <div className='content'>
                  <div className='header'>{name}</div>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </section>

      <section></section>
    </div>
  );
}

export default Games;
