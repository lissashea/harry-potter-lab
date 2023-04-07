import express from 'express'
import Houses from '../lib/models/houses.js'


const housesRouter = express.Router()

housesRouter.get('/', async (req, res) => {
   const housesData = await Houses.find({})
   if(housesData === null){
    console.log("Houses not found")
   }else{
    res.json(housesData)
   }
})

housesRouter.get('/:id', async (req,res) => {
    const houseId = await Houses.findById(req.params.id)
    if(houseId === null){
        console.log("House Not Found")
    }else{
        res.json(houseId)
    }
})

housesRouter.post('/', async (req, res) => {
    const housePost = await Houses.create(req.body)
    res.json(housePost)
})

housesRouter.put('/:id', async (req, res) => {
    let houseUpdate = await Houses.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true },
    )
    res.json(houseUpdate)
})

housesRouter.delete('/:id', async (req, res) => {
    let deleteHouse = await Houses.findOneAndRemove({ _id: req.params.id })
    res.json(deleteHouse)
})

export default housesRouter