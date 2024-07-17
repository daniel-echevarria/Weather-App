import fahrenheitConverter, { celciusConverter } from "./fahrenheitConverter";
import fetchGif from "./fetchGif";

export default async function displayData(data, location) {
  const coolData = await data;

  const conditionIcon = coolData.icon;
  const conditionText = coolData.conditions;
  const temperature = coolData.temp;

  const imageEl = document.querySelector("img");
  imageEl.src = await fetchGif(conditionIcon);

  const titleEl = document.querySelector("h2");
  titleEl.textContent = `Today's weather in ${location} is ${conditionText} with a temperature of`;

  const tempTextEl = document.querySelector(".temp-text");
  tempTextEl.textContent = `${temperature} Fahrenheit`;

  const convertButton =
    document.getElementById("convert-btn") ||
    createConvertButton(tempTextEl, temperature);
  document.querySelector(".temp").append(convertButton);
}

const createConvertButton = (tempTextEl, tempData) => {
  const button = document.createElement("button");
  button.textContent = "Convert To Celcius";
  button.id = "convert-btn";
  const tempInCel = fahrenheitConverter(tempData);
  const tempInFahr = celciusConverter(tempInCel);

  button.addEventListener("click", function () {
    if (tempTextEl.textContent.includes("Fahr")) {
      tempTextEl.innerHTML = `${tempInCel} deg Celcius`;
      this.textContent = "Convert to Fahrenheit";
    } else {
      tempTextEl.textContent = `${tempInFahr} deg Fahrenheit`;
      this.textContent = "Convert to Celcius";
    }
  });
  return button;
};
