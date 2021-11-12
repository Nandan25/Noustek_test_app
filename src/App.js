import FlightData from "./flights.json";
import React, { useState } from "react";
import FlightCard from "./FlightCard";
import SearchForm from "./SearchForm";

function App() {
  const [price, setPrice] = useState(10000);
  const [source, setSource] = useState();
  const [flights, setFlights] = useState([]);
  const [destination, setDestination] = useState();
  const [travelDate, setTravelDate] = useState();
  const locations = ["Goa", "Mumbai", "Delhi", "Pune", "Bengaluru", "Chennai"];

  const onChangeHandler = (event) => {
    event.preventDefault();
    if (event.target.name === "source") {
      setSource(event.target.value);
    }
    if (event.target.name === "destination") {
      setDestination(event.target.value);
    }
    if (event.target.name === "price") {
      setPrice(event.target.value);
    }
    if (event.target.name === "travelDate") {
      console.log(event.target.value);
      setTravelDate(event.target.value);
    }
  };

  const onSubmit = (event) => {
    const responses = [];
    event.preventDefault();

    FlightData.map((flight) => {
      if (
        flight.source === String(source) &&
        flight.destination === String(destination) &&
        flight.price <= price &&
        flight.date === travelDate
      ) {
        responses.push(flight);
      }
    });
    setFlights(responses);
    console.log(FlightData);
  };

  return (
    <div>
      <h1>Flight Search Engine</h1>
      <div style={{ float: "left", width: "20%" }}>
        <SearchForm
          locations={locations}
          price={price}
          source={source}
          travelDate={travelDate}
          destiation={destination}
          onChangeHandler={onChangeHandler}
          onSubmit={onSubmit}
        />
      </div>
      <div style={{ float: "right", width: "80%" }}>
        <span>
          {flights.map((flight, index) => {
            return <FlightCard flight={flight}></FlightCard>;
          })}
        </span>
      </div>
    </div>
  );
}

export default App;
