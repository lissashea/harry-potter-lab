import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/houses', { useNewUrlParser: true, useUnifiedTopology: true })

export default mongoose