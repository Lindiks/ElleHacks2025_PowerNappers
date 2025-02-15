const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = Schema({
    _id: ObjectId,
    Username: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
        // match: /[A-Za-Z]+/, //no special characters
        trim: true          //removes whitespace from both ends of the string
    },
        
    Password:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
        // match: /[A-Za-Z]+/, 
        trim: true          
    },
    Name: String, 
    Age: Number,  //put a catch to only allow betweeen certain age 
    Assistance: Boolean, // If a nanny/assitant is required 
    LimitedMobility: Boolean, // Limited mobility 
    Description: String,
    Interests: [String],
    Friends: [{type: Schema.Types.ObjectId, ref: 'User'}], 
    
    History: [{type: Schema.Types.ObjectId, ref: 'Hangout'}]
})



userSchema.statics.findByUsername = function(name, callback){
    this.findOne({Username: name}, callback);
}


module.exports = mongoose.model("User", userSchema);