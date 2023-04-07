import mongoose from '../../db/connection.js'
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: String,
    role: String,
    house: String,
    school: String,
    ministryOfMagic: Boolean,
    orderOfThePhoenix: Boolean,
    dumbledoresArmy: Boolean,
    deathEater: Boolean,
    bloodStatus: String,
    species: String,
})

export default mongoose.model("Characters", characterSchema)