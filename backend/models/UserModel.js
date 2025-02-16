const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = Schema({
    _id: ObjectId,
    FirstName: String, 
    LastName: String,
    Age: Number,
    Assistance: Boolean,
    LimitedMobility: Boolean,
    Availability: [String],
    Interests: [String],
    Bio: String
})

module.exports = mongoose.model("User", userSchema);
