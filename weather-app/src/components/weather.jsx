import React from 'react';

function Weather({ data }) {
  if (data.cod !== 200) return <div className="alert alert-danger">City not found. Try again.</div>;

  return (
    <div className="text-center mt-4">
      <h2>{data.name}, {data.sys.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p className="lead text-capitalize">{data.weather[0].description}</p>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Temperature:</strong> {data.main.temp}°C
        </li>
        <li className="list-group-item">
          <strong>Humidity:</strong> {data.main.humidity}%
        </li>
        <li className="list-group-item">
          <strong>Wind Speed:</strong> {data.wind.speed} m/s
        </li>
      </ul>
    </div>
  );
}

export default Weather;
