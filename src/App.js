import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends Database</h1>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/friends' />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
