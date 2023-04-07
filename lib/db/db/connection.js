const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/harrypotter',{
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(instance =>
  console.log(`Connected to db: ${instance.connections[0].name}`)
)
.catch(err => console.log("Connection Failed.", err));

const db = mongoose.connection 

module.exports = mongoose;