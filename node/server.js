const http = require('http');
var path = require("path");
// spawn_python.js
var thing = path.join(__dirname, '..', 'backend/basic_sent_anal.py');
var spawn = require("child_process").spawn;


// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Access
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var datas = []
    // Send back a response and end the connection

    req.on('data', (d) => {
        datas.push(d)
    }).on('end', () => {
        // calling child spawn process here.
        let buffer = datas[datas.length - 1].toString('utf-8');
        console.log(buffer)
        var process = spawn('python',[thing, buffer]);
        var script_output = []
        process.stdout.on('data', (data) => {
            console.log("(python) stdout: " + data.toString())
            script_output.push(data.toString())
        });
        process.on('exit', (code, signal) => {
          for (let i = 0; i < script_output.length; i++) {
              res.write(script_output[i])
          }
          res.end();
        });
    })
});

// Start the server on port 3000
app.listen(3030);
console.log('Node server running on port 3030');
