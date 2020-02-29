const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Access
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var datas = []
    // Send back a response and end the connection
    res.end('Hello World!\n');
    req.on('data', (d) => {
        datas.push(d)
    }).on('end', () => {
        console.log(JSON.stringify(datas))
        // calling child spawn process here.
    })
});

// Start the server on port 3000
app.listen(3030);
console.log('Node server running on port 3030');
