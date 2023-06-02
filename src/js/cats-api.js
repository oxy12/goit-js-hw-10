
const API_KEY =
  'live_XYApthMjZmH4OTeiNHIyqqRlAgDJULwU8IWTO74wnJTYK7ptcRusAsKbG7bBtvcF';

const catBreedsUrl ='https://api.thecatapi.com/v1/breeds';
const catImageUrl = 'https://api.thecatapi.com/v1/images';

function fetchBreeds() {
  return fetch(`${catBreedsUrl}/?api_key=${API_KEY}`).then(resp => resp.json());
}

function fetchCatByBreed(catId) {
  return fetch(
    `${catImageUrl}/search?breed_ids=${catId}&api_key=${API_KEY}`
  ).then(response => response.json());
}

export { fetchBreeds, fetchCatByBreed };