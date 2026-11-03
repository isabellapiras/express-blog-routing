const express = require('express')
const postsRouter = require('./routers/posts')
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');
const app = express()
const port = 3000;

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// CRUD for posts
app.use('/posts', postsRouter)
app.use(notFound)
app.use(errorsHandler)

app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port}`)
})
