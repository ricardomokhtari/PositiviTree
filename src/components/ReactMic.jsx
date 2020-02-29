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
      </div>
    );
  }
}

export default Example