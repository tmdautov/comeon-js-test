import { useEffect } from 'react';
import styles from './Game.css'; 
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Game() {
  let { id } = useParams();
  console.log(id)
  useEffect(() => {
    window.comeon.game.launch(id);

    
    // const { match } = this.props;
    // console.log(match)
  })
  return(
    <div className="ingame">
        <div className="ui grid centered">
          <div className="three wide column">
            <Link to="/games" className="ui right floated secondary button inverted">
              <i className="left chevron icon"></i>Back
            </Link>
          </div>
          <div className="ten wide column">
            <div id="game-launch">
              {/* {error && (
                <h2 className="game__not-found">Game not found</h2>
              )} */}
            </div>
          </div>
          <div className="three wide column"></div>
        </div>
      </div>
  );
}

export default Game;