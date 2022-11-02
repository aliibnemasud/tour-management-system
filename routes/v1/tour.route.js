const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const toursController = require('../../controller/tour.controller');


router.route('/tours')
/**
 * @api {get} Get all the tour details here
 * @require {admin}
 */
.get(toursController.getTours)
/**
 * @api {post} Post tour here
 * required field {name, description, price, tickets (in-stock, out-of-stock)}
 */
.post(toursController.postTours)

/**
 * @api {get tours by id} Post tour here
 */

router.route('/tours/:id').get(toursController.getTourById)

/**
 * @api {Get} Trending tour 
 */

router.get('/tour/trending', toursController.getTrendingTour)

/**
 * @api {Get} Get Cheapest tour 
 */

router.get('/tour/cheapest', toursController.getCheapestTour)

/**
 * @api {Update tours} update tour by using id
 */

router.route('/tour/:id').patch(toursController.updateTourById)



module.exports = router;