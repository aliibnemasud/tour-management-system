const Tour = require("../models/Tour");

// get all the tour

exports.getToursService = async () => {
    const result = await Tour.find({});
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
    return tour;
}

// Update Tour service

exports.updateTourByIdService = async (id, data) => {
    const updateTour = await Tour.updateOne({ _id: id }, { $set: data });
    return updateTour;
}