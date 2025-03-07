const express = require('express')
const Book = require('../models/book')

const mostrarLivros = async (req, res) => {
    try {
        const allBooks = await Book.find()
        if (allBooks?.length > 0) {
            res.status(200).json({
                success : true,
                message : 'livros lidos com sucesso',
                data : allBooks
            })
        } else {
            res.status(404).json({
                message : 'nenhum livro achado na base de dados'
            })
        }
    } catch (e) {
        console.log(e)
    }
}

const mostrarLivroPorId = async (req, res) => {
    try {
        const bookPorId = await Book.findById(req.params.id)

        if (bookPorId) {
            res.status(200).json({
                success : true,
                message : 'Livro encontrado com sucesso',
                data : bookPorId
            })
        } else {
            res.status(404).json({
                success : false,
                message : 'o livro não foi encontrado'
            })
        }
    } catch (e) {
        console.log(e)
    }
}

const updatePorId = async (req, res) => {
    try {
        const formsInfo = req.body;
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, formsInfo, {
            new : true
        })
        if (!updatedBook) {
            res.status(404).json({
                success : false,
                message : "O livro não foi encontrado, tente outro id"
            })
        } 
        res.status(200).json({
            success : true,
            message : "Livro atualizado com sucesso",
            data : updatedBook
            
            })
    } catch (e) {
        console.log(e)
    }
}

const createLivro= async (req, res) => {
    const dataNewBook = req.body;
    const createdBook =  await Book.create(dataNewBook)
    try {
        if (createdBook) {
            res.status(201).json({
                success : true,
                message : 'livro criado com sucesso.',
                data : createdBook
            })
        } else {
            res.status(500).json({
                success : false,
                message : 'algo deu errado, tente novamente mais tarde.'
            })
        }
    } catch (e) {
        console.log(e)
    }
}

const deletePorId = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id)

        if (deletedBook) {
            res.status(200).json({
                success : true,
                message : 'Livro deletado com sucesso',
                data : deletedBook
            })
        } else {
            res.status(404).json({
                success : false,
                message : 'o livro não foi encontrado'
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {mostrarLivros, mostrarLivroPorId, updatePorId, createLivro, deletePorId}