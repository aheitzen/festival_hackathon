var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  neighborhood: String,
  meal: String
});


module.exports = mongoose.model('Restaurant', RestaurantSchema);