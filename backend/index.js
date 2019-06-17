const express = require('express')
const sqlite = require('sqlite')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')
const multer = require('multer')
var cookieParser = require('cookie-parser')

const app = express()
let database
var upload = multer({dest: 'images/'})

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json())
app.use(cookieParser())

sqlite.open('db.sqlite').then(database_ => {
  database = database_
})

app.post('/petImage')

console.log('Database connection up and running')
// Query for search.vue, show all animals in DB
app.get('/pets', (request, response) => {
  
  database.all('SELECT * FROM pet').then(pets => {
    response.send(pets)
<<<<<<< HEAD
    // console.log('All animals in db are: ');
    // console.log(pets);

=======
>>>>>>> e6dfff1f77a40c3e1047554a3d9e92586cc37e8a
  })
})

// Query for login.vue, check if email and password in DB
app.get('/users/:userEmail/:userPassword', (request, response) => {
  
  database.all('SELECT * FROM user').then(users => { 
    var tempUser = null
    var userFound = false
    var cookieId = null

    for (let i = 0; i < users.length; i++) {
      tempUser = users[i];

      if (request.params.userEmail === tempUser.email && request.params.userPassword === tempUser.password) {
        cookieId = uuidv4()
        userFound = true
        response.status(200)
<<<<<<< HEAD
        request.params.userId
        response.cookie('id', cookieId, { expires: new Date(Date.now() + 9000000) }).send(tempUser.id)
=======
>>>>>>> e6dfff1f77a40c3e1047554a3d9e92586cc37e8a
        break
      } else if (request.params.userEmail === tempUser.email && request.params.userPassword !== tempUser.password) {
        response.status(401)
        break
      } else {
        response.status(404)
      }
    }
    
    if (!userFound) {
      response.send('')
    } else {
      database.run('INSERT INTO cookieMonster VALUES (?,?)', [tempUser.id, cookieId]).then(() => {
        response.cookie('id', cookieId).send(tempUser.name)
      })
    }
  })
})

app.delete('/signout', (request, response) => {

  database.run('DELETE FROM cookieMonster WHERE secretId=?', [request.cookies.id])
  response.clearCookie(request.cookies.id);
  response.send()
})

app.get('/getCookies', (request, response) => {
  database.all('SELECT user.name FROM user INNER JOIN cookieMonster ON user.id = cookieMonster.userId').then(user =>{
    if (user[0].name === undefined) {
      response.send('')
    } else {
      response.send(user[0].name)
    }
  })
})

app.get('/contacts', (request, response) => {
  const contacts = [
    { email: 'randy@random.com', phone: '1834214567' },
    { email: 'hardy@random.com', phone: '1958023452' },
  ]
  response.send(contacts)
})

app.post('/users', (request, response) => {
  var tempId = uuidv4()
  database.run('INSERT INTO user VALUES (?, ?, ?, ?, ?, ?)', [request.body.name, request.body.password, request.body.email, request.body.location, request.body.number, tempId])
  .then(() => {
    var cookieId = uuidv4()
    database.run('INSERT INTO cookieMonster VALUES (?,?)', [tempId, cookieId]).then(() => {
      response.cookie('id', cookieId).send(tempId)
    })
  })
})

app.post('/pets', (request, response) => {
  database.run('INSERT INTO pet VALUES (?, ?, ?, ?, ?, ?, ?)', [request.body.name, request.body.userId, request.body.type, request.body.description, request.body.gender, request.body.pedigree, request.body.age])
  .then(() => {
    response.send('INSERTED PET')
  })
})

app.listen(3000)