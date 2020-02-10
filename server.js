// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

let express = require('express');
let app = express();

// Send back index.html on a get request to root:
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html', (err) => {
    if (err) { res.status(500).send(err); }
  });
});

// Send back jsonData on a request to /data:
var jsonData = { count: 12, message: 'hey' };

app.get('/data', (req, res) => {
  res.status(200).json(jsonData);
});


app.listen(3000);