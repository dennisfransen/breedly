const express = require('express')
const sqlite = require('sqlite')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')
var cookieParser = require('cookie-parser')

const app = express()
let database

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

console.log('Database connection up and running')
// Query for search.vue, show all animals in DB
app.get('/pets', (request, response) => {
  
  database.all('SELECT * FROM pet').then(pets => {
    console.log('Cookies: ', request.cookies);
    response.send(pets)
    // console.log('All animals in db are: ');
    // console.log(pets);

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
        console.log('user and password exsists in DB');
        cookieId = uuidv4()
        userFound = true
        response.status(200)
        response.cookie('id', cookieId, { expires: new Date(Date.now() + 9000000) }).send(tempUser.id)
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
    } else {
      console.log('Add new id to cookieMonster')

      database.run('INSERT INTO cookieMonster VALUES (?,?)', [tempUser.id, cookieId]).then(() => {
        response.send()

      })
    }
  })
})

app.delete('/signout/:cookie', (request, response) => {
  database.run('DELETE FROM cookieMonster WHERE secretId=?', [request.params.cookie])
  console.log('Delete värdet är: ' , request.params.cookie);
  response.clearCookie(request.params.cookie);
  response.send()
})

app.get('/setCookie/:userId', (request, response) =>{
  console.log('setCokkie userid request', request.params.userId);
  
  database.all('SELECT * FROM cookieMonster WHERE userId = ?', [request.params.userId]).then(user =>{
    response.send(user[0].secretId)
    console.log('cookie id is: ', user[0].secretId);
    
  })
})

app.get('/getCookies', (request, response) => {
  console.log('bell', request.cookies);
  
  database.all('SELECT * FROM cookieMonster WHERE secretId = ?', [request.cookies.id]).then(user =>{
    console.log('bell', user[0].secretId)

    if (user[0].secretId === undefined) {
      response.send('')
    }
    response.send(user[0].userId)
    
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
  console.log(request.body)
  database.run('INSERT INTO user VALUES (?, ?, ?, ?, ?, ?)', [request.body.name, request.body.password, request.body.email, request.body.location, request.body.number, uuidv4()])
})

app.post('/pets', (request, response) => {
  database.run('INSERT INTO pet VALUES (?, ?, ?, ?, ?, ?, ?)', [request.body.name, uuidv4(), request.body.type, request.body.description, request.body.gender, request.body.pedigree, request.body.age])
})

app.listen(3000)