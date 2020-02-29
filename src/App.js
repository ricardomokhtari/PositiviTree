import React, {Component} from 'react';
import './App.css';
import Stage_1_Happy from './Images/stage 1 happy.jpg';
import Stage_1_Sad from './Images/stage 1 sad.jpg';
import Stage_15_Happy from './Images/stage 1.5 happy.jpg';
import Stage_15_Sad from './Images/stage 1.5 sad.jpg';
import Stage_2_Happy from './Images/stage 2 happy.jpg';
import Stage_2_Sad from './Images/stage 2 sad.jpg';
import Stage_25_Happy from './Images/stage 2.5 happy.jpg';
import Stage_25_Sad from './Images/stage 2.5 sad.jpg';
import Stage_3_Happy from './Images/stage 3 happy.jpg';
import Stage_3_Sad from './Images/stage 3 sad.jpg';
import Stage_4_Happy from './Images/stage 4 happy.jpg';
import Stage_4_Sad from './Images/stage 4 sad.jpg';
import Stage_5_Happy from './Images/stage 5 happy.jpg';
import Stage_5_Sad from './Images/stage 5 sad.jpg';
import SpeechRecognition from "react-speech-recognition";

const options = {
  autoStart: false,
  continuous: false
}

class Dictaphone extends Component {
  state = {
    sentiment: "",
    image: Stage_1_Happy,
    level: 0,
    response: ""
  }

  constructor(props){
    super(props)
    this.updatePlant = this.updatePlant.bind(this)
  }

  updatePlant(){
    let increment = this.state.sentiment;
    increment = parseInt(Number(increment));
    
    const newLevel = this.state.level + increment;

    if(increment === 0 && newLevel === 0){
      this.setState({image: Stage_1_Sad, response: "That didn't sound very positive :( - try again?", level: newLevel})
    } else if(increment === 1 && newLevel === 1){
      this.setState({image: Stage_15_Happy, level: newLevel, response: "That's great! Keep it up :)"})
    } else if(increment === 0 && newLevel === 1){
      this.setState({image: Stage_15_Sad, level: newLevel, response: "That's great! Keep it up :)"})
    } else if(increment === 1 && newLevel === 2){
      this.setState({image: Stage_2_Happy, level: newLevel, response: "That's great! Keep it up :)"})
    }else if(increment === 0 && newLevel === 2){
      this.setState({image: Stage_2_Sad, level: newLevel, response: "That didn't sound very positive :( - try again?"})
    }else if(increment === 1 && newLevel === 3){
      this.setState({image: Stage_25_Happy, level: newLevel, response: "That's great! Keep it up :)"})
    }else if(increment === 0 && newLevel === 3){
      this.setState({image: Stage_25_Sad, level: newLevel, response: "That didn't sound very positive :( - try again?"})
    }else if(increment === 1 && newLevel === 4){
      this.setState({image: Stage_3_Happy, level: newLevel, response: "That's great! Keep it up :)"})
    }else if(increment === 0 && newLevel === 4){
      this.setState({image: Stage_3_Sad, level: newLevel, response: "That didn't sound very positive :( - try again?"})
    }else if(increment === 1 && newLevel === 5){
      this.setState({image: Stage_4_Happy, level: newLevel, response: "That's great! Keep it up :)"})
    }else if(increment === 0 && newLevel === 5){
      this.setState({image: Stage_4_Sad, level: newLevel, response: "That didn't sound very positive :( - try again?"})
    }else if(increment === 1 && newLevel === 6){
      this.setState({image: Stage_5_Happy, level: newLevel, response: "That's great! Keep it up :)"})
    }else if(increment === 0 && newLevel === 6){
      this.setState({image: Stage_5_Sad, level: newLevel, response: "That didn't sound very positive :( - try again?"})
    }
  }

  handleSend(transcript) {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      const text = xhr.responseText // extract value returned from chatbot.py
      this.setState({sentiment: text}, () => {this.updatePlant();})   // update state with this value
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
          <div className = "title">
            Welcome to PositviTree
          </div>
          <img className = "images" src = {this.state.image}></img>
          <div className="buttons">
            <button onClick={startListening} className = "btn btn-m m-2 btn-success" type="button">Start</button>
            <div className = "button-left">
              <button onClick={() => {stopListening(); this.handleSend(finalTranscript);}} className = "btn btn-m m-2 btn-success" type="button">Stop</button>
            </div>
          </div>
          <div className = "text">
            You: {finalTranscript}
          </div>
          <div className="text">
            Plant: {this.state.response}
          </div>
          <div className = "sentiment">
            {this.state.sentiment}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default SpeechRecognition(options)(Dictaphone)
