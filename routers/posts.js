const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Lista dei post')
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