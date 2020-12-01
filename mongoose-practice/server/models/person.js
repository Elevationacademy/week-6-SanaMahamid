const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

const Person = mongoose.model("person", personSchema)
module.exports = Person

/*const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

const Schema = mongoose.Schema

const computerSchema = new Schema({
    maker : String,
    price : Number,
})

const addressSchema = new Schema({
    city : String,
    street: String,
    apartment : Number
  })
const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    address : addressSchema
  })

/*const Computer = mongoose.model('computer', computerSchema)

let c1 = new Computer({maker: "hp", price: 5000})
c1.save()
let c2 = new Computer({maker: "apple", price: 7300})
c2.save()*/

/*const Person = mongoose.model('person', personSchema)
/*const Person = mongoose.model('person', personSchema, 'persons'); //<== persons will be the name of the collection*/

/*let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field
//console.log(p1)
//let p2 = new Person({ firstName: "Sana", lastName: "Mahamid", age: 26 })

p1.save()
//p2.save()
Person.find({}, function (err, people) {
    console.log(people)
})

let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

let allTheShooberts = [p2, p3, p4, p5]
allTheShooberts.forEach(s => s.save())
Person.findById("5c16c63bc5ad73471c3ca323", function (err, person) {
    person.age += 10 //how time flies
    person.save()
})

Person.findByIdAndUpdate("5c16c63bc5ad73471c3ca323", { age: 70 }, { new: true }, function (err, person) {
    console.log(person)
})
Person.findById("5c16c63bc5ad73471c3ca323", function (err, person) {
    person.remove(function (err) {
        console.log(err) //usually this will be `null`, unless something went wrong
    })
})*/


  
