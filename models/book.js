const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'You need to inform the title.'],
        trim : true,
        maxLength : [200, 'It needs to be lower than 200 characters'],

    },
    author : {
        type : String,
        required : [true, 'You need to inform the author.'],
        trim : true,        
    },
    year : {
        type : Number,
        required : [true, 'You need to inform the year.'],
        min : [1000, 'The year needs to be above a 1000'],
        max : [new Date().getFullYear(), 'The year can not be in the future']
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
})

module.exports = mongoose.model('Book', bookSchema)