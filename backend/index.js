import sqlite from 'sqlite'
import express from 'express'
import uuid from 'uuid'

const app = express()
app.use(express.static(path.join(path.resolve(), 'public')))

let database
sqlite.open('database.sqlite').then(database_ => {
    database = database_
})


