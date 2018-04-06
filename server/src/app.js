const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(express.static('../client/dist'))
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//TODO: new endpoint for generating schema from existing config files
// - either all config files in a directory (possibly nested with subdirectories) or a specific config file

app.get('', (req, res) => {
  res.sendfile('index.html');
})

app.get('/items', (req, res) => {
  //TODO: fs.readdir ... list of all config files and corresponding schema files
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

app.get('/item', (req, res) => {
  //TODO: fs.read ... open a config file and corresponding schema file
  res.send(
    {
      title: "Hello World!",
      description: "Hi there! How are you?  Item"
    }
  )
})

app.post('/item', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  //TODO: persist posted data to file system
  console.log(req.body);
  res.send(
    req.body
  )
})

app.listen(process.env.PORT || 8081)