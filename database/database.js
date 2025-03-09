const mongoose = require('mongoose')
require('dotenv').config()

const connectToDb = async() => {
    try {

        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to database successfully')

    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

module.exports = connectToDb