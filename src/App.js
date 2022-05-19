// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Header from './components/header/Header'
import Login from './pages/login/Login'
import Games from './pages/games/Games'

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <header className="App-header">
        hello world
      </header> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="login" element={<Login />} />
        <Route path="games" element={<Games />} />
      </Routes>
    </div>
  );
}

export default App;
