export default function fahrenheitConverter(temp) {
  const tempInCelsius = ((temp - 32) * 5) / 9;
  return Math.round(tempInCelsius * 10) / 10;
}

export function celciusConverter(temp) {
  const tempInFahrenheit = (temp * 9) / 5 + 32;
  return Math.round(tempInFahrenheit * 10) / 10;
}
