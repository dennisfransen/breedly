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
  database.all('SELECT * FROM user').then(users => { // UNIQUE
    var tempUser = null
    var userFound = false

    for (let i = 0; i < users.length; i++) {
      tempUser = users[i];

      if (request.params.userEmail === tempUser.email && request.params.userPassword === tempUser.password) {
        console.log('user and password exsists in DB');
        userFound = true
        response.status(200)
        response.send(tempUser.name)
        break
      } else if (request.params.userEmail === tempUser.email && request.params.userPassword !== tempUser.password) {
        console.log('email found in DB, wrong password');
        break
      } else {
        console.log('user and password doesnt exsist in DB ' + request.params.userEmail, request.params.userPassword)
      }
    }

    if (!userFound) {
      response.status(401)
      response.send('')
    }
  })
  
})

app.get('/contacts', (request, response) => {
  const contacts = [
    { email: 'randy@random.com', phone: '1834214567' },
    { email: 'hardy@random.com', phone: '1958023452' },
  ]
  response.send(contacts)
<<<<<<< HEAD
// app.get('/users', (request, response) => {
//   database.all('SELECT * FROM user')
//   .then(users => {
//     response.send(users)
//   })
 })
 
=======
})

>>>>>>> d46f581a57df18dc3687a34f0cff5e177b99e5e7
app.post('/users', (request, response) => {
  database.run('INSERT INTO user VALUES (?, ?, ?, ?, ?, ?)', [request.body.name, request.body.password, request.body.email, request.body.location, request.body.number, uuidv4()])
  .then(() => {
    response.send('INSERTED USER')
  })
})

app.post('/pets', (request, response) => {
  database.run('INSERT INTO pet VALUES (?, ?, ?, ?, ?, ?, ?)', [request.body.name, uuidv4(), request.body.type, request.body.description, request.body.gender, request.body.pedigree, request.body.age])
})

app.listen(3000)