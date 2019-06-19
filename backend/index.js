const express = require('express')
const sqlite = require('sqlite')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')
const multer = require('multer')
const path = require('path')
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

app.use('/images', express.static(path.join(path.resolve(), 'images')))
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
        request.params.userId
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

// Query for app.vue to get cookie if user is already logged in
app.get('/getCookies', (request, response) => {
  database.all('SELECT user.name FROM user INNER JOIN cookieMonster ON user.id = cookieMonster.userId').then(user =>{
    if (user[0].name === undefined) {
      response.send('')
    } else {
      response.send(user[0].name)
    }
  })
})

// Query for app.vue to get user id if user is already logged in
app.get('/getUserId', (request, response) => {
  database.all('SELECT user.id FROM user INNER JOIN cookieMonster ON user.id = cookieMonster.userId').then(user =>{
    if (user[0].id === undefined) {
      response.send('')
    } else {
      response.send(user[0].id)
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

app.get('/users', (request, response) => {
  database.all('SELECT * FROM user')
  .then(users => {
    response.send(users)
    
  })
 })
 
app.post('/file', upload.single('image'), (request, response) => {
  response.send(request.file)
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
  database.run('INSERT INTO pet VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [request.body.name, request.body.userId, request.body.type, request.body.description, request.body.gender, request.body.pedigree, request.body.age, request.body.imageName])
  .then(() => {
    response.send('inserted!')
  })
})










app.get('/userCredentials', (request, response) => {

  database.all('SELECT user.* FROM user INNER JOIN cookieMonster ON user.id = cookieMonster.userId')
  .then(userCredentials => { 
    
    response.send(userCredentials)

  })

})

app.get('/userPets', (request, response) => {

  database.all('SELECT pet.* FROM pet INNER JOIN cookieMonster ON pet.userid = cookieMonster.userId')
  .then(petInfo => {

    console.log('this is petinfo: ', petInfo)
    response.send(petInfo)

  })

})













app.get('/aboutText', (request, response) => {
  database.all('SELECT * FROM aboutus')
  .then(aboutText => {
    response.send(aboutText)
  })
})

app.listen(3000)