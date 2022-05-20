// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Header from './components/header/Header'
import Login from './pages/login/Login'
import Games from './pages/games/Games'
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
      <div className="layout">
      <AuthProvider>  
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Header />} />
          <Route path="login" element={<Login />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          
          {/* private routes */}
          {/* <Route path="games" element={<Games />} /> */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="games" element={<Games />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>  
      </div>      
    </main>
  );
}

export default App;
