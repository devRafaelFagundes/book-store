require('dotenv').config()
const express = require('express')

const connectDb = require('./database/database')
const bookRouter = require('./routes/book-routes')

const app = express();
app.use(express.json())
//parse json data

app.use('/api/books', bookRouter)
//set all the routes: /api/books + given bookRouter route

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('the server is successfully working...')
})

connectDb()