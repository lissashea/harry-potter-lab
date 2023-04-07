import express from 'express'
import Characters from '../lib/models/characters.js'

const characterRouter = express.Router()

characterRouter.get('/', async (req, res) => {
    const charData = await Characters.find({})
   if(charData === null){
    console.log("Characters Not found")
   }else{
    res.json(charData)
   }
})

characterRouter.get('/:id', async (req,res) => {
    const charId = await Characters.findById(req.params.id)
    if(charId === null){
        console.log("Character Not Found")
    }else{
        res.json(charId)
    }
})

characterRouter.post('/', async (req, res) => {
   const charPost = await Characters.create(req.body)
   if(charPost === null){
    console.log("No Post")
   }else{
    res.json(charPost)
   }
})

characterRouter.post('/', async (req, res) => {
    const charPost = await Characters.create(req.body)
    res.json(charPost)
})

characterRouter.put('/:id', async (req, res) => {
    const charUpdate = await Characters.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true },
    )
    res.json(charUpdate)
})

characterRouter.delete('/:id', async (req, res) => {
    const deleteChar = await Characters.findOneAndRemove({ _id: req.params.id })
    res.json(deleteChar)
})

export default characterRouter