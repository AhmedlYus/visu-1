import React from 'react'

function BookingRental() {
  return (
    <div className="form-container">
      <form>
        <div><h1>Rent Aston Martin</h1></div>
        <div className="prices-text">
          <h3>prices</h3>
          <h5>Starting price - 3000kr</h5>
          <h5>Hourly price - 1500kr</h5>
        
        </div>
        <div className="form-row">
        </div>
        <div className="form-group">
            <label htmlFor="email">Name:</label>
            <input
              type="name"
              id="name"
            />
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
}

export default BookingRental;
