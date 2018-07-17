const express = require('express')
const service = require('./service.js')
const bodyParser = require('body-parser');

const app = express()

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3001, () => console.log('Example app listening on port 3001!'))

app.get('/people/list', (req, res) => {
   res.json(service.getList());
})

app.get('/people/:id', (req, res) => {

   const person = service.getPerson(req.params.id);
   if (person) {

      res.json(person)
   }
   else {
      res.status(404).json({
         messege: "user not found"
      })
   }
})

app.get('/people/admin/list', (req, res) => {
   res.json([service.getAdminList()])
})

app.post('/people', (req, res) => {
   service.addPerson(req.body);
   res.json({
      messege: "user added successfully"
   })
})

