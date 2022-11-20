const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age: Number,
    favoriteFoods:[string],
})

const person = mongoose.model('Person', PersonSchema)

module.exports = person