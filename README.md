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
- generate json-schema files from existing config files (https://jsonschema.net/)
- store json-schema files on the server in parallel with the config files
- server responses include the json-schema and the config

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
