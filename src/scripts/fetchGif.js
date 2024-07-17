export default async function fetchGif(input) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=BUa8hCSs17AgWRqHqwEeATY11WnXwUUU&s=${input}`,
    { mode: "cors" }
  );
  const inputData = await response.json();
  const gifUrl = inputData.data.images.original.url;
  return gifUrl;
}
