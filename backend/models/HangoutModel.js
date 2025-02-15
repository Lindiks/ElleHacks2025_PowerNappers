//for history 
const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let hangoutSchema = Schema({
    _id: ObjectId,
    Date: String, //revise this 
    Attendees: [{type: Schema.Types.ObjectId, ref: 'User'}]
    
})

hangoutSchema.statics.findById = function(id, callback){
  this.findbyID(id, callback);
}

module.exports = mongoose.model("Hangout", hangoutSchema);