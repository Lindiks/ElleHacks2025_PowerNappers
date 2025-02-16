const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = Schema({
    _id: ObjectId,
    firstName: String, 
    lastName: String,
    age: Number,
    address: String,
    city: String,
    assistance: Boolean,
    limitedAccesibility: Boolean,
    availability: [String],
    tags: [String],
    description: String,
    distance: String,
    imageUrl: String
})

module.exports = mongoose.model("User", userSchema);
