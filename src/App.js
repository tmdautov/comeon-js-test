import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Login from './pages/login/Login';
import Games from './pages/games/Games';
import Game from './pages/game/Game';
import NotFound from './pages/not-found/NotFound';

import RequireAuth from './components/require-auth/RequireAuth';
import Unauthorized from './pages/unauthorized/Unauthorized';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <main className='App'>
      <Layout>
        <AuthProvider>
            <Routes>
              {/* public routes */}
              <Route path='login' element={<Login />} />
              <Route path='unauthorized' element={<Unauthorized />} />

              {/* private routes */}
              <Route element={<RequireAuth />}>
                <Route path='/' element={<Games />} />
                <Route path='/games' element={<Games />} />
                <Route path='/game/:id' element={<Game />} />
              </Route>

              {/* catch all */}
              <Route path='*' element={<NotFound />} />
            </Routes>
        </AuthProvider>
      </Layout>
    </main>
  );
}

export default App;
