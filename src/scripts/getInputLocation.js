import createInputField from "input-with-label";
import getWeatherDataFromLocation from "./getWeatherDataFromLocation";
import processWeatherData from "./processWeatherData";
import displayData from "./displayData";

export default function getInputLocation() {
  const container = document.createElement("div");
  const inputField = createInputField("location");
  const button = createFetchDataButton(inputField);
  container.append(inputField, button);
  return container;
}

function createFetchDataButton(inputField) {
  const button = document.createElement("button");
  button.textContent = "Get Data From Location";
  button.addEventListener("click", () => {
    const location = inputField.querySelector("input").value;
    const weatherData = getWeatherDataFromLocation(location);
    const processedData = processWeatherData(weatherData);
    displayData(processedData);
  });
  return button;
}

// Create an Input with a button,
// The button when clicked, checks the value inside the input
// It passes this value to the getData from location
// the result is passed to the processing data
// the result is displayed
