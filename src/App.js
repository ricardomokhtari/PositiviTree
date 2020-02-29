import React, {Component} from 'react';
import './App.css';
import Example from './components/ReactMic.jsx';
import Stage1 from './stage 1.jpg';
import Stage2 from './stage 2.jpg';
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
/*
function App() {
  const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
  };

  const Dictaphone = ({
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  }) => {
    if (!browserSupportsSpeechRecognition) {
      return null;
    }
  };

  Dictaphone.propTypes = propTypes;

  return (
    <React.Fragment>
      <div className = "global">
          <img className = "images" src = {Stage1}></img>
          <Example/>
          <button >Reset</button>
          <span>{transcript}</span>
      </div>
    </React.Fragment>
  );
}

export default App;
*/
const options = {
  autoStart: false,
  continuous: false
}

class Dictaphone extends Component {

  handleSend(transcript) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3030/')
    xhr.send(transcript) // recordedBlob is string that should be analysed
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening } = this.props
    if (!browserSupportsSpeechRecognition) {
      return null
    }
    return (
      <React.Fragment>
        <div className = "global">
          <img className = "images" src = {Stage1}></img>
          <button onClick={startListening} className = "btn btn-success" type="button">Start</button>
          <button onClick={stopListening, resetTranscript, this.handleSend(transcript)} className = "btn btn-success" type="button">Stop</button>
          <span>{transcript}</span>
        </div>
      </React.Fragment>
    )
  }
}
export default SpeechRecognition(options)(Dictaphone)
