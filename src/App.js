import React, {Component} from 'react';
import './App.css';
import Example from './components/ReactMic.jsx';
import Stage1 from './stage 1.jpg';
import Stage2 from './stage 2.jpg';
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const options = {
  autoStart: false,
  continuous: false
}

class Dictaphone extends Component {

  handleSend(transcript) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3030/')
    xhr.send(JSON.stringify(transcript)) // recordedBlob is string that should be analysed
  }

  render() {
    const { finalTranscript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening } = this.props
    if (!browserSupportsSpeechRecognition) {
      return null
    }
    return (
      <React.Fragment>
        <div className = "global">
          <img className = "images" src = {Stage1}></img>
          <button onClick={startListening} className = "btn btn-success" type="button">Start</button>
          <button onClick={stopListening, resetTranscript, () => this.handleSend(finalTranscript)} className = "btn btn-success" type="button">Stop</button>
          <span>{finalTranscript}</span>
        </div>
      </React.Fragment>
    )
  }
}
export default SpeechRecognition(options)(Dictaphone)
