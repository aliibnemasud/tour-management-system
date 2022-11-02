const Tour = require("../models/Tour");
const { getToursService, postTourService, findTourByIdService, updateTourByIdService } = require("../services/tour.services");

// get all tours controller

exports.getTours = async (req, res, next) => {
  try {
    let filters = { ...req.query };

    const excludesFields = ['sort', 'page', 'limit'];
    excludesFields.forEach(field => delete filters[field]);

    // gt, lt, gte, lte
    let filterString = JSON.stringify(filters)
    filterString = filterString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

    filters = JSON.parse(filterString)

    // limit, sort, select ->  Are store Here    
    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      queries.sortBy = sortBy;
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      queries.fields = fields;
    }

    if (req.query.limit) {
      const limit = req.query.limit;
      queries.limit = (limit * 1);
    }

    // Pagination Code 

    if (req.query.page) {
      const { page, limit = 5 } = req.query;
      queries.limit = limit;
      const skip = (page - 1) * Number(limit);
      queries.skip = skip;
      queries.limit = (+limit);
    }

    const tour = await Tour.find(filters).skip(queries.skip).limit(queries.limit).select(queries.fields).sort(queries.sortBy);
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

// get trending tour

exports.getTrendingTour = async (req, res, next) => {
  try {    
    const result = await Tour.find({}).sort('-viewCount').limit(3);
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

// Get 3 cheapest tour

exports.getCheapestTour = async (req, res, next) => {
  try {    
    const result = await Tour.find({}).sort('price').limit(3);
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