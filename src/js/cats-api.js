
const API_KEY =
  'live_XYApthMjZmH4OTeiNHIyqqRlAgDJULwU8IWTO74wnJTYK7ptcRusAsKbG7bBtvcF';

const catBreedsUrl ='https://api.thecatapi.com/v1/breeds';
const catImageUrl = 'https://api.thecatapi.com/v1/images';

async function fetchBreeds() {
  const resp = await fetch(`${catBreedsUrl}/?api_key=${API_KEY}`);
  return await resp.json();
}

async function fetchCatByBreed(catId) {
  const response = await fetch(
    `${catImageUrl}/search?breed_ids=${catId}&api_key=${API_KEY}`
  );
  return await response.json();
}

export { fetchBreeds, fetchCatByBreed };