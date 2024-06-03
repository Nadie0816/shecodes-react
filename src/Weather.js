import "./App.css";
import React from "react";
import Forecast from "./Forecast";
import Footer from "./Footer";

function Weather() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <div className="Form">
          <form className="mb-3">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Type a city name"
                  className="form-control"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
              <div class="col-3">
                <button
                  class="btn btn-success w-100"
                  id="current-location-button"
                >
                  Current
                </button>
              </div>
            </div>
          </form>
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Weather;
//let apiKey = "3a94f3778290bfeee61278505dbbe51d";
//  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
