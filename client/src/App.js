import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Landing from './pages/Landing';
import Game from './pages/Game'
function App() {
  return (
      <Router>
        <Routes>
          <Route element={<Landing/>} path='/'></Route>
          <Route element={<Game/>} exact path='/game'></Route>
        </Routes>
      </Router>
  );
}

export default App;
