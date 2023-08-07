import logo from './logo.svg';
import './App.css';

import UserList from './components/UserList';

import Counter from './components/Counter'
import Home from './pages/home'
import Profile from './pages/profile';
import Login from './pages/login';

import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <UserProvider>
          <Router>
            <Header />

            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/home' element={<Home />}></Route>

              <Route path='/login' element={<Login />}></Route>
              <Route path='/profile' element={<Profile />}></Route>

            </Routes>

          </Router>
        </UserProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
