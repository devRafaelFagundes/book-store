require('dotenv').config()
const express = require('express')

const connectDb = require('./database/database')
const bookRouter = require('./routes/book-routes')

const app = express();
app.use(express.json())

app.use('/api/books', bookRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('o servidor está funcionando normalmente')
})

connectDb()