import styles from './Layout.css'; 

function Layout(props) {
  return(
    <div>
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
            <img src={'../images/logo.svg'} alt="logo"/>
        </div>
      </div>
      <div className="main container">
        {props.children}
      </div>      
    </div>
  );
}

export default Layout;