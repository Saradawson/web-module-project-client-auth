import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends Database</h1>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/friends' element={<FriendsList />}/>
          <Route exact path='/friends/add' element={<AddFriend />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
