'ues strict';

const express = require('express') // require the express package
const app = express() // initialize your express app instance
 
// a server endpoint 
app.get('/', // our endpoint name
 function (request, respunce) { // callback function of what we should do with our request
  respunce.send('Hello World 👋 My Name is Sam') // our endpoint function response
})
 
app.get('hello',(request,response)=> {
    response.send('hello Too!');

})
 // kick start the express server to work
 app.listen(3001, () => {
     console.log (`derver started on port`);

 });