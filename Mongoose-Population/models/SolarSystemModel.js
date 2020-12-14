const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SolarSystemSchema = new Schema({
    starName: String,
    planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
})

const SolarSystem = mongoose.model("SolarSystemModel", SolarSystemSchema)
module.exports = SolarSystem