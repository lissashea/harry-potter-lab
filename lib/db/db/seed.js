import mongoose from './connection.js'
import Houses from '../models/houses.js' 
import Characters from '../models/characters.js'
import houseData from './houses.json' assert { type: "json" }
import charData from './characters.json' assert { type: "json" }


Houses
    .deleteMany({})
    .then(() => {.insertMany(houseData)})
    .then(mongoose.disconnect)
    .then(()=> console.log("done"))
    .catch(()=> console.log("err", err))

Characters
    .deleteMany({})
    .then(() => {.insertMany(charData)})
    .then(mongoose.disconnect)
    .then(()=> console.log("done"))
    .catch(()=> console.log("err", err))