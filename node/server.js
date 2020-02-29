// server.js

const http = require('http');
const speech = require('@google-cloud/speech');
const client = new speech.SpeechClient();
const request = {
    config: {
      encoding: 'UTF8',
      sampleRateHertz: 44100,
      languageCode: 'en-US',
    },
    interimResults: false, // If you want interim results, set this to true
  };

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
     // Access
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.set('content-type', 'audio/wav');
    res.set('accept-ranges', 'bytes');

    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Stream object for Google API 
    const recognizeStream = client
    .streamingRecognize(request)
    .on('error', console.error)
    .on('data', data => {
        console.log(
        `Transcription: ${data.results[0].alternatives[0].transcript}`
        );
    });

    var datas = []
    // Send back a response and end the connection
    res.end('Hello World!\n');
    req.on('data', (d) => {
        datas.push(d)
    }).on('end', () => {
        recognizeStream(datas)
    })
});

// Start the server on port 3000
app.listen(3030);
console.log('Node server running on port 3030');
