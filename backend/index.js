const express = require('express')
const sqlite = require('sqlite')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4');

const app = express()
let database

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json())

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
    console.log(users);

    users.forEach(user => {
      if (request.params.userEmail === user.email && request.params.userPassword === user.password) {
        console.log('user and password exsists in DB');
        response.send()
      } else if (request.params.userEmail === user.email && request.params.userPassword !== user.password) {
        console.log('email found in DB, wrong password');
        response.status(401)
        response.send()
      } else {
        console.log(request.params.userEmail, request.params.userPassword)
        console.log('user and password doesnt exsist in DB')
        response.status(404)
        response.send()
      }
    })
  })

});

app.get('/contacts', (request, response) => {
  database.all('SELECT * FROM contactus').then(contacts => {
    response.send(contacts)
  });
})

app.post('/users', (request, response) => {
  console.log(request.body)
  database.run('INSERT INTO user VALUES (?, ?, ?, ?, ?, ?)', [request.body.name, request.body.password, request.body.email, request.body.location, request.body.number, uuidv4()])
})

app.post('/pets', (request, response) => {
  database.run('INSERT INTO pet VALUES (?, ?, ?, ?, ?, ?, ?)', [request.body.name, uuidv4(), request.body.type, request.body.description, request.body.gender, request.body.pedigree, request.body.age])
})

app.listen(3000)



