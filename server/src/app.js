const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const GenerateSchema = require('generate-schema')
const dirTree = require('directory-tree')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))
app.use(express.static('../client/dist'))

app.get('', (req, res) => {
  res.sendfile('index.html');
})

app.get('/files', (req, res) => {
  var tree = dirTree('../files')

  res.send(tree)
})

app.get('/files/:fileName', (req, res) => {
  var fileName = req.params.fileName
  console.log(fileName)

  fs.readFile('../files/' + fileName, (err, file) => {
    var model = JSON.parse(file)
    var schema

    // TODO: how is the schema provided?
    //  1. url is available as $schema prop on model, use http.get(model.$schema)
    //  2. schema.json file exists on filesystem
    //  3. generate schema using GenerateSchema

    // schema = GenerateSchema.json('Test', JSON.parse(file))

    if (model.$schema) {
      http.get(model.$schema, (res2) => {
        let data = ''

        res2.on('data', (chunk) => {
          data += chunk
        })

        res2.on('end', () => {
          schema = JSON.parse(data)

          res.send({
            'model': model,
            'schema': schema
          })
        })
      })
    } else {
      res.send({
        'model': model,
        'schema': schema
      })
    }
  })
})

app.put('/files/:fileName', (req, res) => {
  var fileName = req.params.fileName
  console.log(fileName)

  //TODO: persist posted data to file system
  console.log(req.body);
  res.send('')
})

app.get('/schemas/:fileName', (req, res) => {
  var fileName = req.params.fileName

  fs.readFile('../schemas/' + fileName, (err, file) => {
    res.send(JSON.parse(file))
  })
})

app.listen(process.env.PORT || 8081)