//just to test express api, use request package. Use a second terminal to run
// At second terminal run node post.js
var request=require('request');
request.post('http://localhost:9001/abc', {name:'Koray', surname: 'Asili'});