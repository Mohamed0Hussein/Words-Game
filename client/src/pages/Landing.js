import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  const { setUserName, fetchWords, startGame } = useAppContext();
  const [name, setName] = useState('');

  // Fetch words from the API when the component mounts
  useEffect(() => {
    axios.get('/api/words').then(res => {
      fetchWords(res.data.words);
    });
  }, []);

  function nameChanged(e) {
    setUserName(e.target.value);
    setName(e.target.value);
  }

  function begin() {
    startGame();
    navigate('./game');
  }

  return (
    <div className="App">
      <div className='container'>
        <div className="input-group mb-3">
          <input type='text' className="form-control" placeholder="Enter your name here" onChange={e => nameChanged(e)} />
        </div>
        <p>Welcome: {name}!</p>
        <button type="button" className="btn btn-primary" onClick={begin}>Begin</button>
      </div>
    </div>
  );
}

export default Landing;
