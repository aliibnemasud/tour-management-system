const mongoose = require('mongoose');

// Schema design of tour

const tourSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name"],
      unique: true,
      trim: true,
      minLength: [3, "Minimum length must be 3 character"]
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be empty"],
    },
    tickets: {
      type: String,
      enums: {
        value: ['in-stock', "out-of-stock", "discontinued"],
        message: "status can't be {value}"
      },
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updateAt: {
      type: Date,
      default: Date.now,
    },
    viewCount: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: "https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image009.jpg"      
    }
  })
  
  // SCHEMA ->  MODEL -> QUERY
  
  const Tour = mongoose.model('Tour', tourSchema);

  module.exports = Tour;