import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCarSide, FaCalendarAlt } from 'react-icons/fa';
import "../../../App.css";

export const BookRide = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [rideType, setRideType] = useState('Standard');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = 'sampleUserId';  

    const bookingData = {
      userId,  
      rideDetails: {
        pickupLocation: pickup,
        dropoffLocation: destination,
        rideType: rideType,
      },
      bookedAt: date,
    };

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        navigate('/ride-confirmation');   
      } else {
        console.error("Booking failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error in booking request:", error);
    }
  };

  return (
    <div className="book-ride-wrapper">
      <div className="booking-content">
        <div className="book-ride-container">
          <h1 className="book-ride-title">Book Your Ride</h1>

          <form className="ride-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="pickup">
                <FaMapMarkerAlt /> Pickup Location:
              </label>
              <input
                type="text"
                id="pickup"
                placeholder="Enter pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="destination">
                <FaMapMarkerAlt /> Destination:
              </label>
              <input
                type="text"
                id="destination"
                placeholder="Enter destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rideType">
                <FaCarSide /> Ride Type:
              </label>
              <select
                id="rideType"
                value={rideType}
                onChange={(e) => setRideType(e.target.value)}
              >
                <option value="Standard">Standard</option>
                <option value="Luxury">Luxury</option>
                <option value="Auto-Rickshaw">Auto-Rickshaw</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="rideDate">
                <FaCalendarAlt /> Ride Date & Time:
              </label>
              <input
                type="datetime-local"
                id="rideDate"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Confirm Ride <FaMapMarkerAlt />
            </button>
          </form>
        </div>
        <div className="map-section">
          <div className="map-placeholder">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096367!2d144.95373561531553!3d-37.8162799797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e4e7f3f7%3A0x7bb7b637d9b2b6af!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1613615704519!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRide;
