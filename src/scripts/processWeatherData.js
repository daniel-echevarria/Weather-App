export default async function processWeatherData(data) {
  const jsonData = await data;
  const currentConditions = jsonData.currentConditions;
  return currentConditions;
}
