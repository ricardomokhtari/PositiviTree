import React, {Component} from 'react';
import './App.css';
import Stage1 from './stage 1.jpg';
import Stage2 from './stage 2.jpg';
import Stage3 from './stage 3.jpg';
import SpeechRecognition from "react-speech-recognition";


const options = {
  autoStart: false,
  continuous: false
}

class Dictaphone extends Component {
  state = {
    sentiment: "",
    image: Stage1,
    level: 0
  }

  constructor(props){
    super(props)
    this.updatePlant = this.updatePlant.bind(this)
  }

  async updatePlant(){
    let increment = this.state.sentiment;
    increment = parseInt(Number(increment));
    const newLevel = this.state.level + increment;
    switch(newLevel){
      case 0:
        this.setState({image: Stage1})
        break;
      case 1:
        this.setState({image: Stage2})
        break;
      case 2:
        this.setState({image: Stage3})
        break;
    }
    await this.setState({level: newLevel})
  }

  handleSend(transcript) {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      const text = xhr.responseText // extract value returned from chatbot.py
      this.setState({sentiment: text})   // update state with this value
    })
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
          <img className = "images" src = {this.state.image}></img>
          <div className="buttons">
            <button onClick={startListening} className = "btn btn-success" type="button">Start</button>
            <div className = "button-left">
              <button onClick={() => {stopListening(); this.updatePlant(); this.handleSend(finalTranscript);}} className = "btn btn-success" type="button">Stop</button>
            </div>
          </div>
          <div>{finalTranscript}</div>
          <div>{this.state.sentiment}</div>
        </div>
      </React.Fragment>
    )
  }
}
export default SpeechRecognition(options)(Dictaphone)
