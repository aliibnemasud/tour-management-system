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
 * @api {post} Post tour here
 * required field {name, description, price, tickets (in-stock, out-of-stock)}
 */
.post(toursController.postTours)

router.route('/:id')
/**
 * @api {get tours by id} Post tour here
 */
.get(toursController.getTourById)
/**
 * @api {Update tours} update tour by using id
 */
.patch(toursController.updateTourById)



module.exports = router;