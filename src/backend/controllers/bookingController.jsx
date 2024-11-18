const Booking = require('../models/Booking');


exports.createBooking = async (req, res) => {
  const { userId, rideDetails } = req.body;

  if (!userId || !rideDetails || !rideDetails.pickupLocation || !rideDetails.dropoffLocation || !rideDetails.rideType) {
    return res.status(400).json({ message: 'Missing booking details' });
  }

  try {
    const booking = new Booking({ userId, rideDetails });
    await booking.save();
    res.status(201).json({
      message: 'Ride booked successfully',
      booking
    });
  } catch (error) {
    res.status(500).json({ message: 'Error while creating booking', error });
  }
};
