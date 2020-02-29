import React from 'react';
import './App.css';
import Example from './components/ReactMic.jsx';

function App() {
  return (
    <React.Fragment>
      <div className = "global">
          <Example/>
      </div>
    </React.Fragment>
  );
}

export default App;
