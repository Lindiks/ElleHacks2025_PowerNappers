const fileName = "./userData.json"; 
const mongoose = require("mongoose");
const User = require("./models/UserModel");
let allUsers = [];

//Read the JSON data for "users"
let data = require(fileName);

//Add all "users"
data.forEach(u=>{
    console.log(u)
    let newUser = new User();
    newUser._id = new mongoose.Types.ObjectId();
    // newUser._id = u._id
    newUser.FirstName = u.FirstName
    newUser.LastName = u.LastName
    newUser.Age = u.Age
    newUser.Address = u.Address
    newUser.City = u.City
    newUser.Assistance = u.Assistance
    newUser.LimitedMobility = u.LimitedMobility
    newUser.Availability = []
    newUser.Interests = []
    newUser.Bio = u.Bio

  allUsers.push(newUser)
})

mongoose.connect('mongodb+srv://admin:admin@silvercircledb.ka6ob.mongodb.net/SilverCircle', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

//Add all our "users"
db.once('open', function() {
  User.insertMany(allUsers)
});
