import express from 'express'
import housesRouter from './db/routes/housesRouter.js'
import characterRouter from './db/routes/charactersRouter.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/houses', housesRouter)

app.use('/characters', characterRouter)

app.listen(3000, () => {
    console.log("please work")
})