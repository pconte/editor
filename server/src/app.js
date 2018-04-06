const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/items', (req, res) => {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  })

app.get('/item', (req, res) => {
    res.send(
      {
        title: "Hello World!",
        description: "Hi there! How are you?  Item"
      }
    )
  })

app.listen(process.env.PORT || 8081)