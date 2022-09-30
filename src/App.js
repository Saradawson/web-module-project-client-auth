import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends Database</h1>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/friends' element={<FriendsList />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
