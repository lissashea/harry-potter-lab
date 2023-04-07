npm init -y
express, mongoose, chalk, cors, morgan
nodemon dependcy 


const mongoose = require('../db/connection.js');
const House = require('../lib/models/House.js');
const Character = require('../lib/models/Character');
const characters = require('../characters.json');
const houses = require('../houses.json');

const seedDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();
    for (const house of houses) {
      // find the existing house with the same _id value
      const existingHouse = await House.findOne({ _id: house._id });

      // update the existing house with the new data
      existingHouse.name = house.name;
      existingHouse.mascot = house.mascot;
      existingHouse.headOfHouse = house.headOfHouse;
      existingHouse.houseGhost = house.houseGhost;
      existingHouse.founder = house.founder;
      existingHouse.values = house.values;
      existingHouse.colors = house.colors;
      existingHouse.members = house.members;
      // save the updated house to the database
      const savedHouse = await existingHouse.save();

      // update the characters in the house with the new house reference
      for (const memberId of house.members) {
        const existingCharacter = await Character.findOne({ _id: memberId });
        if (existingCharacter === null) {
          console.error(`Character with _id ${memberId} not found`)
        }
        existingCharacter.house = savedHouse;
        await existingCharacter.save();
      }

    }

    // Create an array of Character documents
    const characterDocs = characters.map((character) => {
      return new Character({
        _id: character._id, // Use the _id value from the file as the _id value for this document
        name: character.name,
        role: character.role,
        house: character.house,
        school: character.school,
        boggart: character.boggart,
        ministryOfMagic: character.ministryOfMagic,
        orderOfThePhoenix: character.orderOfThePhoenix,
        dumbledoresArmy: character.dumbledoresArmy,
        deathEater:character.deathEater,
        bloodStatus: character.bloodStatus,
        species: character.species
});
});

// Save the Character documents to the database
const result = await Character.insertMany(characterDocs);
console.log(result); // { n: 25, ok: 1 }

console.log('Data seeded successfully');
} catch (err) {
console.error(err);
} finally {
mongoose.connection.close();
}
};

seedDatabase();


