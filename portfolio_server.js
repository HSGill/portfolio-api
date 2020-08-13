let express = require('express');
let app = express();
let cors = require('cors');
let fetch = require('node-fetch');

app.use(cors());

app.get('/',  async function(req,res) {
    console.log('Working!!!')
   let response = await fetch('https://api.github.com/user/repos', {
      method:'GET',
      headers: {
         'Authorization': 'Bearer ' + '2422899a5564546115db478dc7269517657b765b', 
         'Content-Type': 'application/json'
      }
   })
let data = await response.json();

   res.json(data) //res.json('Hello ' + resp['name']);
})

app.listen(3001);