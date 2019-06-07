import sqlite from 'sqlite'
import express from 'express'
import path from 'path'
import uuid from 'uuid/v4'
import bodyParser from 'body-parser'

console.log('gawad')

const app = express()
app.use(bodyParser.json())
// // app.use(express.static(path.join(path.resolve(), '../frontend/components')))

app.listen(3000)


let database

sqlite.open('db.sqlite').then(database_ => {
    database = database_
    console.log('gawad', database)
})

console.log(database)

app.get('/', (request, response) => {
    database.all('SELECT * FROM user').then(response => {
      response.send('gawad get funkar')

    })
  })

// app.post('/register/', (req, res) => {
//     database.run('INSERT INTO user VALUES (?, ?, ?, ?, ?)', 
//                 [req.body.name, req.body.password, req.body.email, req.body.location, req.body.number, uuid()])
//     res.send('inserted user into database')
//     console.log('gawad')

// })




