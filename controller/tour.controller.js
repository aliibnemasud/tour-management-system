const Tour = require("../models/Tour");

exports.getTours = async (req, res, next) => {
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
  }

exports.postTours = async (req, res, next) => {
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
  }