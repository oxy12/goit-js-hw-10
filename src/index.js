import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './js/cats-api';
import SlimSelect from 'slim-select';

const catInfo = document.querySelector('.cat-info');
const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader-span');



select.addEventListener('change', selectCat);

fetchBreeds()
  .then(r => {
    const markupOption = r
      .map(cat => {
        return `<option value="${cat.id}">${cat.name}</option>\n`;
      })
      .join('');

    select.insertAdjacentHTML('beforeend', markupOption);
  })
  .catch(error => {
    Notiflix.Notify.failure(`Error fetch API, ${error}`);
  });

function selectCat(e) {
  catInfo.innerHTML = '';
  const loader = '<span class="loader"></span>';

  catInfo.insertAdjacentHTML('beforeend', loader);

  const catId = e.target.value;

  fetchCatByBreed(catId)
    .then(cat => {
      catInfo.innerHTML = '';

      const catItem = cat[0].breeds[0];
      const markup = `
              <img width="400" src="${cat[0].url}" alt="cat" />
              <div class="description">
                <h1>${catItem.name}</h1>
                <p>${catItem.description}</p>
                <p>
                <h2>Temperament:</h2>
                ${catItem.temperament}
                </p>
              </div>`;

      catInfo.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => {
      Notiflix.Notify.failure(`Error fetch API, ${error}`);
    });
}