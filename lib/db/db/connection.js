const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/harrypotter',{
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(instance =>
  console.log(`Connected to db:`)
).catch(err => console.log("Connection Failed.", err));

const db = mongoose.connection 

module.exports = mongoose;