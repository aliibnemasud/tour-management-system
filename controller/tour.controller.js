const Tour = require("../models/Tour");
const { getTours, getToursService, postTourService, findTourByIdServices } = require("../services/tour.services");

// get all tours controller

exports.getTours = async (req, res, next) => {
  try {
    const tour = await getToursService();
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

// Post a tours controller

exports.postTours = async (req, res, next) => {
  try {
    const result = await postTourService(req.body)
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

// Get tours by id parameter

exports.getTourById = async (req, res, next) => {
  try {
    const { id } = req.params;    
    const result = await findTourByIdServices(id);
    res.status(200).json({
      status: "Success!",
      data: result
    })
        
  } catch (error) {
    res.status(400).json({
      status: "Fail!",
      message: "Data not found",
      error: error.message
    })    
  }
}