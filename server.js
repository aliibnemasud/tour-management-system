const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;
const colors = require('colors');

// Db connection

mongoose.connect(process.env.DATABASE).then(()=> {
    console.log(`Database connection is successfully`)
});

app.listen(port, () => {
  console.log(`Tour Server is running on ${port}`.yellow.bold)
})