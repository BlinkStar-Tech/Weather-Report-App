import { useState, useEffect } from 'react';
import { weatherCodes } from "../constants";

const CurrentWeather = ({ currentWeather }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Find the appropriate weather icon based on condition code
  const weatherIcon = Object.keys(weatherCodes).find(
    (icon) => weatherCodes[icon].includes(currentWeather.condition.code)
  );

  return (
    <div className="current-weather">
      <div className="datetime">
        <div className="date">
          {currentTime.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        <div className="time">
          {currentTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
      </div>
      <img 
        src={`/icons/${weatherIcon}.svg`}
        className="weather-icon" 
        alt={currentWeather.description} 
      />
      <h2 className="temperature">
        {currentWeather.temperature}<span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;