const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const tourRoutes = require('./routes/v1/tour.route');

app.use(cors());
app.use(express.json());

// Schema design

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
    trim: true,
    minLength: [3, "Minimum length must be 3 character"]
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price can't be empty"],
  },
  tickets: {
    type: String,
    enums: {
      value: ['in-stock', "out-of-stock", "discontinued"],
      message: "status can't be {value}"
    },
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  }
})

// SCHEMA ->  MODEL -> QUERY

const Tour = mongoose.model('Tour', tourSchema);

app.post('/api/v1/tour', async (req, res, next) => {
  try {
    const tour = new Tour(req.body);
    const result = await tour.save();
    res.status(200).json({
      status: "Success!",
      message: "Tour data inserted Successfully!",
      data: result
    })

  } catch (error) {
    res.status(400).json({
      status: "Failed!",
      message: "Data inserted Fail",
      error: error.message
    })
  }
})

app.get('/api/v1/tour', async (req, res, next) => {
  try {
    const tour = await Tour.find({});
    res.status(200).json({
      status: "Success!",
      data: tour
    })

  } catch (error) {
    res.status(400).json({
      status: "Failed!",     
      error: error.message
    })

  }

})


// app.use('/api/v1/tour', tourRoutes);

app.get('/', (req, res) => {
  res.send('Mongoose Server is running....')
})

// Routes for no routs

app.all("*", (req, res) => {
  res.send("No Routes found!");
})


module.exports = app;