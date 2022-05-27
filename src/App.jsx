import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const isAu = useSelector((state) => state.auth.isAuthenticated);
  return (
    <React.Fragment>
    <Header />
    {isAu && <UserProfile />}
    {!isAu && <Auth />}
    <Counter />
    </React.Fragment>
  );
}

export default App;
