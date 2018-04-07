const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(express.static('../client/dist'))
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const GenerateSchema = require('generate-schema')

//TODO: new endpoint for generating schema from existing config files
// - either all config files in a directory (possibly nested with subdirectories) or a specific config file

app.get('', (req, res) => {
  res.sendfile('index.html');
})

app.post('/item', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  //TODO: persist posted data to file system
  console.log(req.body);
  res.send(
    req.body
  )
})

app.get('/files', (req, res) => {
  var fs = require('fs')
  var files = []

  fs.readdir('../files/', (err, fileNames) => {
    fileNames.forEach(fileName => {
      files.push({
        'fileName': fileName
      })
    })

    fs.readdir('../schemas/', (err, fileNames) => {
      fileNames.forEach(fileName => {
        var fileIndex = files.findIndex(obj => obj.fileName === fileName)

        files[fileIndex]['schemaName'] = fileName
      })

      res.send(files)
    })
  })
})

app.get('/files/:fileName', (req, res) => {
  var fs = require('fs')
  var fileName = req.params.fileName

  fs.readFile('../files/' + fileName + '.json', (err, file) => {
    console.log(file)
    var schema = GenerateSchema.json('Test', JSON.parse(file))
    console.log(schema)
    res.send({
      'model': JSON.parse(file),
      'schema': schema
    })
  })
})

app.get('/file', (req, res) => {
  var fs = require('fs')

  fs.readFile('../files/newsletter-subscription.json', (err, file) => {
    console.log(file)
    res.send(JSON.parse(file))
  })
})

app.get('/schema', (req, res) => {
  var fs = require('fs')

  fs.readFile('../schemas/newsletter-subscription.json', (err, data) => {
    console.log(data)
    res.send(JSON.parse(data))
  })
})

app.listen(process.env.PORT || 8081)