import React from 'react';
import './App.css';
import Example from './components/ReactMic.jsx';
import Plant from './unnamed.png';

function App() {
  return (
    <React.Fragment>
      <div className = "global">
          <img src = {Plant}></img>
          <Example/>
      </div>
    </React.Fragment>
  );
}

export default App;
