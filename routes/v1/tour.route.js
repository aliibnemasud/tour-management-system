const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const toursController = require('../../controller/tour.controller');


router.route('/')

/**
 * @api {get} Get all the tour details here
 * @require {admin}
 */
.get(toursController.getTours)

/**
 * @api {get} Get all the tour details here
 * @require {admin}
 */

.post(toursController.postTours)



module.exports = router;