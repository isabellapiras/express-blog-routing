const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Lista dei post')
})

module.exports = router