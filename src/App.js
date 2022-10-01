import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends Database</h1>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends</Link>
          <Link to='/friends/add'>Add Friend</Link>
          <Link to='/logout'>Logout</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='/friends'
          element={
          <PrivateRoute>
            <FriendsList/>
          </PrivateRoute>}/>
          <Route exact path='/friends/add' element={
            <PrivateRoute>
              <AddFriend />
            </PrivateRoute>
          }/>
          <Route exact path='/logout' element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
