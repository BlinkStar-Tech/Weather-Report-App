// Weather condition codes mapping to icon names
const weatherIcons = {
  // Sunny / Clear
  1000: {
    day: 'clear-day',
    night: 'clear-night'
  },
  // Partly cloudy
  1003: {
    day: 'partly-cloudy-day',
    night: 'partly-cloudy-night'
  },
  // Cloudy
  1006: {
    day: 'cloudy',
    night: 'cloudy'
  },
  // Overcast
  1009: {
    day: 'overcast',
    night: 'overcast'
  },
  // Mist
  1030: {
    day: 'mist',
    night: 'mist'
  },
  // Patchy rain
  1063: {
    day: 'rain',
    night: 'rain'
  },
  // Light rain
  1183: {
    day: 'rain',
    night: 'rain'
  },
  // Moderate rain
  1186: {
    day: 'rain',
    night: 'rain'
  },
  // Heavy rain
  1189: {
    day: 'rain',
    night: 'rain'
  },
  // Thunder
  1087: {
    day: 'thunderstorm',
    night: 'thunderstorm'
  },
  // Snow
  1114: {
    day: 'snow',
    night: 'snow'
  },
  // Default
  default: {
    day: 'clear-day',
    night: 'clear-night'
  }
};

export const getWeatherIcon = (conditionCode, isDay) => {
  const timeOfDay = isDay ? 'day' : 'night';
  const iconSet = weatherIcons[conditionCode] || weatherIcons.default;
  return iconSet[timeOfDay];
}; 