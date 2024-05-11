import React from 'react';
import '../styles/BookingSite.css';

const BookingForm = () => {
  return (
    <div className="form-container">
      <form>
        <div><h1>Book tickets</h1></div>
        <div className="prices-text">
          <h3>Ticket prices</h3>
          <h5>Adult - 250kr</h5>
          <h5>Children - 100kr</h5>
        
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="adults">Adults:</label>
            <input
              type="number"
              id="adults"
              className="small-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="children">Children:</label>
            <input
              type="number"
              id="children"
              className="small-input"
            />
          </div>
        </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
            />
          </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
