const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/UserModel.js');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@silvercircledb.ka6ob.mongodb.net/SilverCircle')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

//CRUD Operations
//Create (POST)
app.post('/', async (req, res) => {
  try {
    const { firstName, 
      lastName, 
      age, 
      address, 
      city, 
      assistance, 
      limitedAccesibility, 
      availability, 
      tags, 
      description, 
      distance,
      imageUrl
    } = req.body;

    console.log(req.body);
    
    // if (!firstName || !lastName || !age || !address || !city || !assistance || !limitedAccesibility || !availability || !tags || !description) {
    //   return res.status(400).json({ error: 'All required fields must be filled.' });
    // }

    let newUser = new User();
    newUser._id = new mongoose.Types.ObjectId();
    newUser.firstName = firstName
    newUser.lastName = lastName
    newUser.addressge = age
    newUser.address = address
    newUser.city = city
    newUser.assistance = assistance
    newUser.limitedAccesibility = limitedAccesibility
    newUser.availability = availability,
    newUser.tags = tags,
    newUser.description = description,
    newUser.distance = distance,
    newUser.imageUrl = imageUrl

    await newUser.save();
    res.status(201).json({ message: 'User created successfully!', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

//Read (GET)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: 'Users currently in Database:', users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

//Update (PUT)
app.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: `User ${updatedUser.firstName} ${updatedUser.lastName} info updated!`, user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

//Delete (DELETE)
app.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: `User with ID: ${req.params.id} has been deleted!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
