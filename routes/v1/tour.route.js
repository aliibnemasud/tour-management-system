const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/', (req, res) => {

    res.send("Hello from the route")
})

router.post('/', async (req, res, next) => {
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

module.exports = router;