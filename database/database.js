const mongoose = require('mongoose')
require('dotenv').config()

const connectToDb = async() => {
    try {

        await mongoose.connect(process.env.MONGO_URI)
        console.log('conectado ao banco de dados normalmente')

    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

module.exports = connectToDb