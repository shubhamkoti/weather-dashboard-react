import moment from "moment";
import React, { useMemo } from "react";
import convertToFahrenheit from "../helpers/convertToFahrenheit";

function SummaryCard({ day, isFahrenheitMode, degreeSymbol, isCurrent }) {
  const day_icon = `${
    "https://openweathermap.org/img/wn/" + day.weather[0]["icon"]
  }@2x.png`;

  const formattedTemp = useMemo(
    () =>
      Math.round(
        isFahrenheitMode ? convertToFahrenheit(day.main.temp) : day.main.temp
      ),
    [day.main.temp, isFahrenheitMode]
  );

  return (
    <li className={`summary-items ${isCurrent ? 'current-time' : ''}`}>
      {isCurrent && <div className="current-badge">Now</div>}
      <p className="temp">
        {formattedTemp}
        {degreeSymbol}
      </p>
      <div className="icon">
        <img src={day_icon} alt={day.weather[0].description} />
      </div>
      <p className="time">{moment(day.dt_txt).format('hh:mm a')}</p>
    </li>
  );
}

export default SummaryCard;
