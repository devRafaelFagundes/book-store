const express = require('express')
const {createBook, showAllBooks, showBookById, updateById, deleteById} = require('../controllers/controller-books')


const router = express.Router()

router.get('/', showAllBooks)
router.get('/:id', showBookById)
router.put('/update/:id', updateById)
router.delete('/delete/:id', deleteById)
router.post('/submit', createBook)
//each route and its respective async function on the controller 



module.exports = router