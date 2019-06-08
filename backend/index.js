const express = require('express')
const sqlite = require('sqlite')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4');

const app = express()
let database

app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

sqlite.open('db.sqlite').then(database_ => {
  database = database_
})

console.log('Database connection up and running')
// Query for search.vue, show all animals in DB
app.get('/pets', (request, response) => {
  database.all('SELECT * FROM pet').then(pets => {
    response.send(pets)
    console.log('All animals in db are: ');
    console.log(pets);

  })
})
// Query for login.vue, check if email and password in DB
app.get('/users/:userEmail/:userPassword', (request, response) => {
  database.all('SELECT * FROM user').then(users => {
    users.forEach(user => {
      if (request.params.userEmail === user.email && request.params.userPassword === user.password) {
        console.log('user and password exsists in DB');
        response.send()
      } else if(request.params.userEmail === user.email || request.params.userPassword === user.password) {
        console.log('email or password found in DB');
        response.status(401)
        response.send()
      } else {
        console.log('user and password doesnt exsist in DB')
        response.status(404)
        response.send()
      }
    })
  })
  
})

app.listen(3000)



