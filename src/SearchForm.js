import React from "react";

export default function SearchForm({
  locations,
  price,
  source,
  travelDate,
  destination,
  onChangeHandler,
  onSubmit,
}) {
  /*Function to generate dropdown to select source and destination*/

  const buildLocations = (locationType, selectedValue) => {
    return (
      <select
        name={locationType}
        value={selectedValue}
        onChange={(event) => {
          onChangeHandler(event);
        }}
        required
      >
        <option value="">Select a {locationType}</option>
        {locations.map((location) => {
          return <option value={location}>{location}</option>;
        })}
      </select>
    );
  };

  return (
    <>
      <form onSubmit={(event) => onSubmit(event)}>
        <label>Source:</label>
        {buildLocations("source", source)}
        <br />
        <label>Destination:</label>
        {buildLocations("destination", destination)}
        <br />
        <label>Journey date:</label>
        <input
          type="date"
          name="travelDate"
          onChange={(event) => {
            onChangeHandler(event);
          }}
          required
        />
        <br />
        <label>Price:</label>
        <input
          type="range"
          name="price"
          min="1000"
          max="10000"
          step="100"
          value={price}
          onChange={(event) => {
            onChangeHandler(event);
          }}
        />
        <br />
        <label>₹{price}</label>
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </>
  );
}
