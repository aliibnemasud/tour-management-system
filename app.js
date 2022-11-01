const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


// Schema design



app.get('/', (req, res) => {
    res.send('Mongoose Server is running....')
  })

// Routes for no routs

app.all("*", (req, res)=> {
    res.send("No Routes found!");
  })


module.exports = app;