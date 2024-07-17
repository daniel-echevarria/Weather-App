import createInputField from "input-with-label";
import getWeatherDataFromLocation from "./getWeatherDataFromLocation";
import processWeatherData from "./processWeatherData";
import displayData from "./displayData";

export default function getInputLocation() {
  const container = document.createElement("div");
  container.classList.add("input-location-section");
  const inputField = createInputField("location");
  const button = createFetchDataButton(inputField);
  container.append(inputField, button);
  return container;
}

function createFetchDataButton(inputField) {
  const button = document.createElement("button");
  button.textContent = "Show Weather";
  button.addEventListener("click", () => {
    const location = inputField.querySelector("input").value;
    const weatherData = getWeatherDataFromLocation(location);
    const processedData = processWeatherData(weatherData);
    displayData(processedData, location);
  });
  return button;
}
