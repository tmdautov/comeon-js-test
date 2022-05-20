import React, {useState, useEffect} from 'react';
import useAuth from '../../hooks/useAuth';

function Games() {
  const { auth, setAuth } = useAuth();
  console.log(auth)
  let [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/games")
    	.then(response => response.json())
    	.then(data => {
        console.log(data)
        setGames(data)
      });
  },[])

  return(
    <div>
      <pre>{ JSON.stringify(games, null, 2) }</pre>
    </div>
  );
}

export default Games;