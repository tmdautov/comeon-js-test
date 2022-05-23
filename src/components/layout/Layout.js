import styles from './Layout.css'; 
import { useLocation } from 'react-router-dom'

function Layout(props) {
  const location = useLocation();
  console.log(location.pathname);

  return(
    <div>
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
            <img src={'../images/logo.svg'} alt="logo"/>
        </div>
      </div>
      <div className={location.pathname !== '/login' ? 'main container' : ''}>
        {props.children}
      </div>      
    </div>
  );
}

export default Layout;