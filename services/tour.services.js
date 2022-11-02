const Tour = require("../models/Tour");

// get all the tour

exports.getToursService = async (filters, skip, limit, select, shortBy) => {
    const result = await Tour.find(filters).skip(skip).limit(limit).select(select).sort(shortBy);
    return result;
}

// Post a tour

exports.postTourService = async (data) => {
    const tour = await Tour.create(data);
    return tour;
}

// get tour by id

exports.findTourByIdService = async (id) => {
    const tour = await Tour.findOne({ _id: id });
    let viewCount = tour.viewCount + 1;
    const data = {
        viewCount: viewCount
    }
    await Tour.updateOne({ _id: id }, { $set: data });
    const updatedTour = await Tour.findOne({ _id: id });
    return updatedTour;
}

// Update Tour service

exports.updateTourByIdService = async (id, data) => {
    const updateTour = await Tour.updateOne({ _id: id }, { $set: data });
    return updateTour;
}

// Trending Tour Service

exports.getTrendingTourService = async () => {
    const trendingTour = await Tour.find({}).sort('-viewCount').limit(3);
    return trendingTour;
}

// Get cheapest Tour Service

exports.getCheapestTourService = async () => {
    const cheapestTour = await Tour.find({}).sort('price').limit(3);
    return cheapestTour;
}

