const express = require('express')
const {mostrarLivros, mostrarLivroPorId, updatePorId, createLivro, deletePorId} = require('../controllers/controller-books')


const router = express.Router()

router.get('/', mostrarLivros)
router.get('/:id', mostrarLivroPorId)
router.put('/update/:id', updatePorId)
router.delete('/delete/:id', deletePorId)
router.post('/submit', createLivro)



module.exports = router