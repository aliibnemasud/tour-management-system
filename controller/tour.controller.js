const Tour = require("../models/Tour");
const { getToursService, postTourService, findTourByIdService, updateTourByIdService } = require("../services/tour.services");

// get all tours controller

exports.getTours = async (req, res, next) => {
  try {
    const filters = { ...req.query };
    const excludesFields = ['sort', 'page', 'limit'];
    
    excludesFields.forEach(field => delete filters[field]);

    const queries = {};

    if(req.query.sort){
      const sortBy = req.query.sort.split(',').join(' ');      
      queries.sortBy = sortBy;
    }
    if(req.query.fields){
      const fields = req.query.fields.split(',').join(' ');      
      queries.fields = fields;
    }
    if(req.query.limit){
      const limit = req.query.limit;  
      queries.limit = limit;
    }
    const tour = await Tour.find(filters).select(queries.fields).sort(queries.sortBy).limit(queries.limit);
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
    const result = await findTourByIdService(id);
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

// Update tours by id parameter

exports.updateTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateTourByIdService(id, req.body);
    res.status(200).json({
      status: "Success!",
      data: result
    })

  } catch (error) {
    res.status(400).json({
      status: "Fail!",
      message: "Can't update the file!",
      error: error.message
    })
  }
}
