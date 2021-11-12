import React from "react";

export default function FlightCard({ flight }) {
  return (
    <div>
      <label>Flight no:</label>
      <span>{flight.flightNo}</span>
      &nbsp;
      <span>{flight.name}</span>
      <br />
      <label>Source:</label>
      <span>{flight.source}</span>&nbsp;&nbsp;
      <label>Destination:</label>
      <span>{flight.destination}</span>&nbsp;&nbsp;
      <label>Travel date:</label>
      <span>{flight.date}</span>&nbsp;&nbsp;
      <label>Arrival time:</label>
      <span>{flight.arrivalTime}</span>&nbsp;&nbsp;
      <label>Departure time:</label>
      <span>{flight.departureTime}</span>&nbsp;&nbsp;
      <br />
      <label>Fare:</label>
      <span>₹{flight.price}</span>&nbsp;
      <br />
    </div>
  );
}
