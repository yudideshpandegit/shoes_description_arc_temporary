const express = require("express");
const path = require('path');

const app = express();

const PORT = "3000";

app.use(express.static('public'));

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


app.get("/", (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else { 
    console.log("The server is started on port",PORT);
  }
});
