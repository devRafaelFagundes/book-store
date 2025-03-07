const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'é obrigaório o título'],
        trim : true,
        maxLength : [200, 'no máximo 200 caracteres'],

    },
    author : {
        type : String,
        required : [true, 'é obrigaório o autor'],
        trim : true,        
    },
    year : {
        type : Number,
        required : [true, 'Obrigatório fornecer o ano'],
        min : [1000, 'Ano precisa ser depois de 1000'],
        max : [new Date().getFullYear(), 'O ano não pode ser no futuro.']
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
})

module.exports = mongoose.model('Book', bookSchema)