used these sites for reference:
- https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0
- https://github.com/vue-generators/vue-form-generator
- https://github.com/formschema/native

installed vue.js
- with webpack
- with router
- did not set up unit tests or e2e tests
- did not use TypeScript

possibilities:
- generate json-schema files from existing model files (https://jsonschema.net/)
- use this instead: https://github.com/Nijikokun/generate-schema
    - generated schemas can either be stored/cached in the filesystem in parallel with the model files
    - or not cached and just regenerated every time
    - benefit of storing/caching means the schemas can be enhanced manually with extra information
- server responses include the json-schema and the model

filesystem tree:
- use https://www.npmjs.com/package/directory-tree
- navigate tree of config files
- click on any file to view the form

for production:
- git clone
- cd client
- npm install
- npm run build
- cd ..
- cd server
- npm install
- npm start
This will serve the full app to the client from the server root endpoint,
along with api data at the other endpoints (maybe preface those endpoints with api)
