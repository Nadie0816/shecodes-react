import React from "react";
import Degrees from "./Degrees";

export default function Forecast() {
  let forecastData = {
    city: "Miami",
    date: "Sunday 13:00",
    description: "Clear",
  };
  return (
    <div className="Forecast">
      <h1 className="city">{forecastData.city}</h1>
      <ul>
        <li>Last updated: {forecastData.date}</li>
        <li>{forecastData.description}</li>
      </ul>
      <Degrees />
    </div>
  );
}
