import React, { Component } from 'react';
import { ReactMic } from 'react-mic';

export class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }

  startRecording = () => {
    this.setState({ record: true });
  }

  stopRecording = () => {
    this.setState({ record: false });
  }

  onData(recordedBlob) {
    console.log('Data:', recordedBlob);
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3030/')
    xhr.send(recordedBlob)
  }

  onStop(recordedBlob) {
    console.log('Final:', recordedBlob);
  }

  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="black"
          backgroundColor = "#f8f79a"
          mimeType="audio/wav" />
          <br></br>
        <button onClick={this.startRecording} className = "btn btn-success" type="button">Start</button>
        <button onClick={this.stopRecording} className = "btn btn-success" type="button">Stop</button>
      </div>
    );
  }
}

export default Example