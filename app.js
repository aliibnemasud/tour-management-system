const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const tourRoutes = require('./routes/v1/tour.route');

app.use(cors());
app.use(express.json());

// tour routes

app.use('/', tourRoutes)


app.get('/', (req, res) => {
  res.send('Mongoose Server is running....')
})

// Routes for no routs

app.all("*", (req, res) => {
  res.send("No Routes found!");
})


module.exports = app;