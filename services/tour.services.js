const Tour = require("../models/Tour");

exports.getToursService = async () => {
    const result = await Tour.find({});
    return result;
}

exports.postTourService = async (data) => {
    const tour = await Tour.create(data);
    return tour;
}

exports.findTourByIdServices = async (id) => {
    const tour = await Tour.findOne({_id: id});
    return tour;
}