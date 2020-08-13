
const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.
let database ={
    candidates:[
        {id:'',name:'',skills:[]}
        ]
    
};
app.post('/candidates', function(req, res) {
  const{id,name,skills} = req.body;
  database.candidates.push({
     id:id,
     name:name,
     skills:skills
 })
  res.status(200).json("OK")
});

app.get('/candidates/search', function(req, res) {
   
   //const{search} = req.query[0];
   console.log(req.query)
});
app.listen(3000);