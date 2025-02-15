const fileName = "./exampledata.json"; 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./models/UserModel");

let allUsers = [];

//Read the JSON data provided in the given file
// Create new users with this 
let data = require(fileName);
data.forEach(u=>{
    console.log(u)
    let newUser = new User();
    // newUser._id = new mongoose.Types.ObjectId();
    newUser._id = u._id
    newUser.Username = u.Username
    newUser.Password = u.Password
    newUser.Name = u.Name
    newUser.Age = u.Age
    newUser.Assistance = u.Assistance
    newUser.LimitedMobility = u.LimitedMobility
    newUser.Description = u.Description
    newUser.Interests = u.Interests
    newUser.Friends = []
    newUser.History = []

  allUsers.push(newUser)
})

mongoose.connect('mongodb+srv://admin:admin@silvercircledb.ka6ob.mongodb.net/SilverCircle', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //We are connected. Drop the database first so we start fresh each time.
// mongoose.connection.db.dropDatabase(function(err, result){})
User.insertMany(allUsers)
      });
    // });
  //});
