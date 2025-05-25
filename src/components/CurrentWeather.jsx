const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <img 
        src={`src/images/clouds-and-sun.png`} // Updated to point to weather.jpg
        className="weather-icon" 
        alt={currentWeather.description} 
      />
      <h2 className="temperature">
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;