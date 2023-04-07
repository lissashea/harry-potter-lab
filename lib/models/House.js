import mongoose from '../../db/connection.js'
const Schema = mongoose.Schema

const housesSchema = new Schema({
    name: String,
    mascot: String,
    headOfHouse: String,
    houseGhost: String,
    founder: String,
    school: String,
    members: [
        {
         type: String
        }
    ],
    values: [
        {
         type: String
        }
    ],
    colors: [
        {
         type: String
        }
    ]
})

export default mongoose.model("Houses", housesSchema)