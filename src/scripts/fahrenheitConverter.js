export default function fahrenheitConverter(temp) {
  const tempInCelsius = ((temp - 32) * 5) / 9;
  return Math.round(tempInCelsius);
}

export function celciusConverter(temp) {
  const tempInFahrenheit = (temp * 9) / 5 + 32;
  console.log(tempInFahrenheit);
  return Math.round(tempInFahrenheit);
}
