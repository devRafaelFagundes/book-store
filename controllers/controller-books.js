const express = require('express')
const Book = require('../models/book')

const showAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find()
        if (allBooks?.length > 0) {
            res.status(200).json({
                success : true,
                message : 'books were loaded successfully',
                data : allBooks
            })
        } else {
            res.status(404).json({
                message : 'No books found'
            })
        }
    // look if there is any book on the database, if the answer is true, then it shows them 
    } catch (e) {
        console.log(e)
    }
}

const showBookById = async (req, res) => {
    try {
        const bookPorId = await Book.findById(req.params.id)

        if (bookPorId) {
            res.status(200).json({
                success : true,
                message : 'Book found successfully',
                data : bookPorId
            })
        } else {
            res.status(404).json({
                success : false,
                message : 'Book not found'
            })
        }
    } catch (e) {
        console.log(e)
    }
}

const updateById = async (req, res) => {
    try {
        const formsInfo = req.body;
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, formsInfo, {
            new : true
        })
        //change a book (found by his id) data by the req.body informed by the user
        //new : true; is for saving that update
        if (!updatedBook) {
            res.status(404).json({
                success : false,
                message : "The book was not found, try again with another ID"
            })
        } 
        res.status(200).json({
            success : true,
            message : "Book updated succesfully",
            data : updatedBook
            
            })
    } catch (e) {
        console.log(e)
    }
}

const createBook= async (req, res) => {
    const dataNewBook = req.body;
    const createdBook =  await Book.create(dataNewBook)
    try {
        if (createdBook) {
            res.status(201).json({
                success : true,
                message : 'Book created succesfully',
                data : createdBook
            })
        } else {
            res.status(500).json({
                success : false,
                message : 'Something went wrong, try again later'
            })
        }
    } catch (e) {
        console.log(e)
    }
}

const deleteById = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id)

        if (deletedBook) {
            res.status(200).json({
                success : true,
                message : 'Book deleted succesfully',
                data : deletedBook
            })
        } else {
            res.status(404).json({
                success : false,
                message : 'Book not found'
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {showAllBooks, showBookById, updateById, createBook, deleteById}