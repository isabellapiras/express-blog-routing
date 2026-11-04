const express = require('express')
const router = express.Router()
const connection = require('../data/db')


// index
router.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results) => {
        if (err) return next(err)
        res.json(results)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Dettagli del post ${id}`)
})

router.post('/', (req, res) => {
    res.send(`Creazione nuovo post`)
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Modifica integrale del post ${id}`)
})

router.patch('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Modifica parziale del post ${id}`)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Cancellazione del post ${id}`)
})


module.exports = router