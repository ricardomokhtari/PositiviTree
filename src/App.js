import React from 'react';
import './App.css';
import Example from './components/ReactMic.jsx';
import Stage1 from './stage 1.jpg';
import Stage2 from './stage 2.jpg';

function App() {
  return (
    <React.Fragment>
      <div className = "global">
          <img className = "images" src = {Stage1}></img>
          <Example/>
      </div>
    </React.Fragment>
  );
}

export default App;
