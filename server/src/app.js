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
const http = require('http')
const dirTree = require('directory-tree')

//TODO: new endpoint for generating schema from existing config files
// - either all config files in a directory (possibly nested with subdirectories) or a specific config file

app.get('', (req, res) => {
  res.sendfile('index.html');
})

app.post('/file', (req, res) => {
  //TODO: persist posted data to file system
  console.log(req.body);
})

app.get('/files', (req, res) => {
  var fs = require('fs')
  var files = []

  const tree = dirTree('../files')
  console.log(tree)

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

  fs.readFile('../files/' + fileName, (err, file) => {
    var model = JSON.parse(file)
    var schema
    // schema = GenerateSchema.json('Test', JSON.parse(file))

    // TODO: how is the schema provided?
    //  1. url is available as $schema prop on model, use http.get(model.$schema)
    //  2. schema.json file exists on filesystem
    //  3. generate schema using GenerateSchema

    if (model.$schema) {
      console.log(model.$schema)
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
    }
  })
})

app.get('/schemas/:fileName', (req, res) => {
  var fs = require('fs')
  var fileName = req.params.fileName
  console.log(fileName)

  fs.readFile('../schemas/' + fileName, (err, file) => {
    res.send(JSON.parse(file))
  })
})

app.listen(process.env.PORT || 8081)