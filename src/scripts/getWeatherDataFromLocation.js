export default async function getWeatherDataFromLocation(location) {
  const weatherJasonData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/` +
      location +
      `?unitGroup=us&key=UXP7FP2VWGZRLDZQ4B8QHBUZ7&contentType=json`
  );
  const weatherData = await weatherJasonData.json();
  return weatherData;
}
