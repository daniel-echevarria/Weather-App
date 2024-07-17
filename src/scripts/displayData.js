export default async function displayData(data) {
  const coolData = await data;
  console.log(coolData);
  const conditionText = coolData.conditions;
  displayConditions(conditionText);
}

const displayConditions = (text) => {
  const conditionsText = document.createElement("p");
  conditionsText.textContent = text;
  document.body.append(conditionsText);
};
