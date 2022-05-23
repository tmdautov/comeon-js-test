// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import Login from './pages/login/Login';
import Games from './pages/games/Games';
import Game from './pages/game/Game';
import NotFound from './pages/not-found/NotFound';

import RequireAuth from './components/require-auth/RequireAuth';
import Unauthorized from './pages/unauthorized/Unauthorized';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  console.log(ROLES.User);
  return (
    <main className='App'>
      <Layout>
        <AuthProvider>
          {/* <BrowserRouter> */}
            <Routes>
              {/* public routes */}
              <Route path='login' element={<Login />} />
              <Route path='unauthorized' element={<Unauthorized />} />

              {/* private routes */}
              <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                <Route path='/' element={<Games />} />
                <Route path='/games' element={<Games />} />
                <Route path='/game/:id' element={<Game />} />
              </Route>

              {/* catch all */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          {/* </BrowserRouter> */}
        </AuthProvider>
      </Layout>
    </main>
  );
}

export default App;
