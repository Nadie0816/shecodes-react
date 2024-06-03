import React from "react";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";

export default function Degrees() {
  let degreesData = {
    temperature: "12",
    humidity: 7,
    wind: 10,
  };
  return (
    <div classNameName="row">
      <div classNameName="col-6">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="black"
          size={40}
          animate={true}
        />

        <strong>{degreesData.temperature}</strong>
        <span classNameName="units">
          <a href="/">°F</a> | <a href="/">°C</a>
        </span>
      </div>

      <div className="col-6">
        <ul>
          <li>Humidity: {degreesData.humidity}%</li>
          <li>Wind: {degreesData.wind} km/h</li>
        </ul>
      </div>

      <div className="icons">
        <div className="row theweek">
          <div className="col weekdays">Mon</div>
          <div className="col weekdays">Tue</div>
          <div className="col weekdays">Wed</div>
          <div className="col weekdays">Thu</div>
          <div className="col weekdays">Fri</div>
        </div>
        <div className="row">
          <div className="col weather">
            {" "}
            <ReactAnimatedWeather
              icon="RAIN"
              color="black"
              size={25}
              animate={true}
            />
          </div>
          <div className="col weather">
            {" "}
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="black"
              size={25}
              animate={true}
            />
          </div>
          <div className="col weather">
            {" "}
            <ReactAnimatedWeather
              icon="WIND"
              color="black"
              size={25}
              animate={true}
            />
          </div>
          <div className="col weather">
            {" "}
            <ReactAnimatedWeather
              icon="RAIN"
              color="black"
              size={25}
              animate={true}
            />
          </div>
          <div className="col weather">
            {" "}
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="black"
              size={25}
              animate={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col degree-whtr">32°F</div>
          <div className="col degree-whtr">70°F</div>
          <div className="col degree-whtr">40°F</div>
          <div className="col degree-whtr">80°F</div>
          <div className="col degree-whtr">90°F</div>
        </div>
      </div>
    </div>
  );
}
