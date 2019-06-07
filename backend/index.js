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

app.get('/pets', (request, response) => {
  database.all('SELECT * FROM pet').then(pets => {
    response.send(pets)
    console.log('All animals in db are: ');
    console.log(pets);

  })
})

app.get('/users/:userEmail/:userPassword', (request, response) => {
  database.all('SELECT * FROM user').then(users => {
    users.forEach(user => {
      if (request.params.userEmail === user.email && request.params.userPassword === user.password) {
        console.log('You are logged in');

      } else {
        console.log('You do not have account')
      }
    })
  })
  response.send()
})

app.listen(3000)



