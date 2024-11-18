const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  rideDetails: {
    pickupLocation: { type: String, required: true },
    dropoffLocation: { type: String, required: true },
    rideType: { type: String, required: true },
  },
  bookedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
