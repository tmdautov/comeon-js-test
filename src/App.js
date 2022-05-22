// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Header from './components/header/Header'
import Layout from './components/layout/Layout'
import Login from './pages/login/Login'
import Games from './pages/games/Games'
import Game from './pages/game/Game'
import NotFound from './pages/not-found/NotFound';

import RequireAuth from './components/require-auth/RequireAuth'
import Unauthorized from './pages/unauthorized/Unauthorized'
import { AuthProvider } from './context/AuthProvider';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  console.log(ROLES.User)
  return (
    <main className="App">
      <Layout>      
        <AuthProvider>  
          <Routes>
            {/* public routes */}
            {/* <Route path="/" element={<Games />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            
            {/* private routes */}
            {/* <Route path="games" element={<Games />} /> */}
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="/" element={<Games />} />
              <Route path="/games" element={<Games />} />
              <Route path="/game/:id" element={<Game />} />
            </Route>

            {/* catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>  
      </Layout>      
    </main>
  );
}

export default App;
