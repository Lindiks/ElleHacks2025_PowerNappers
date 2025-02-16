const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/UserModel.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:admin@silvercircledb.ka6ob.mongodb.net/SilverCircle')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

//CRUD Operations
//Create (POST)
app.post('/', async (req, res) => {
  try {
    const {FirstName, LastName, Age, Assistance, LimitedMobility, Availability, Interests, Bio} = req.body;
    console.log(req.body);

    if (!FirstName || !LastName || !Age || !Assistance || !LimitedMobility || !Availability || !Interests || !Bio) {
      return res.status(400).json({error: 'All fields are required.'});
    }

    let newUser = new User();
    newUser._id = new mongoose.Types.ObjectId();
    // newUser._id = u._id
    newUser.FirstName = u.FirstName
    newUser.LastName = u.LastName
    newUser.Age = u.Age
    newUser.Assistance = u.Assistance
    newUser.LimitedMobility = u.LimitedMobility
    newUser.Availability = []
    newUser.Interests = []
    newUser.Bio = u.Bio

    //Connecting to DB again?
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    
    //Add new "user"
    db.once('open', function() {
      User.insert(newUser)
    });

    res.status(201).json({message: 'User created successfully!', user: newUser});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error});
  }
});

//Read (GET)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({message: 'Users currently in Database:\n', user: users});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
});

//Update (PUT)
app.put('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({message: 'User ' + User.FirstName + ' ' + User.LastName + ' info has been updated!\n', user: User});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
});

//Delete (DELETE)
app.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User ' + User.FirstName + ' ' + User.LastName + ' has been deleted!\n' });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

