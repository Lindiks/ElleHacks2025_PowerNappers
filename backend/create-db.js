const fileName = "./userData.json"; 
const mongoose = require("mongoose");
const User = require("./models/UserModel");
let allUsers = [];

//Read the JSON data for "users"
let data = require(fileName);

mongoose.connect('mongodb+srv://admin:admin@silvercircledb.ka6ob.mongodb.net/SilverCircle')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


//Add all "users"
data.forEach(u=>{
    console.log(u)
    let newUser = new User();
    newUser._id = new mongoose.Types.ObjectId();
    newUser.firstName = u.firstName
    newUser.lastName = u.lastName
    newUser.addressge = u.age
    newUser.address = u.address
    newUser.city = u.city
    newUser.assistance = u.assistance
    newUser.limitedAccesibility = u.limitedAccesibility
    newUser.availability = u.availability,
    newUser.tags = u.tags,
    newUser.description = u.description,
    newUser.distance = u.distance,
    newUser.imageUrl = u.imageUrl

  allUsers.push(newUser)
})

mongoose.connect('mongodb+srv://admin:admin@silvercircledb.ka6ob.mongodb.net/SilverCircle', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

//Add all our "users"
db.once('open', function() {
  User.insertMany(allUsers)
});