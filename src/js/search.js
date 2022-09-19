import { EventsApi } from './modules/eventsApi';
import countries from './data/countries.json';
import { renderEvents } from '../js/modules/markupGallery';
import { gallery } from '../js/modules/markupGallery';
const refSearchForm = document.querySelector('.js-search-form');
const refSearchEvent = document.querySelector('.js-search-event');
const refSelectCountry = document.querySelector('.js-select-country');
const refValuecountry = document.querySelector('.js-value-country');
//const containerStub = document.querySelector('.stub-picture');
export const markupEvents = EventsApi.fetchEvents();
const gallery = document.querySelector('.gallery');
markupEvents.then(data => renderEvents(data));
//console.log(markupEvents);

const markupSelect = countries
  .map(el => `<option value="${el.code}">${el.name}</option>`)
  .join('');

refSelectCountry.insertAdjacentHTML('beforeend', markupSelect);

markupEvents.then(events => renderEvents(events)); //вызов функции рендера по умолчанию
//console.log(test);
refSearchForm.addEventListener('submit', onSearch);
refSearchForm.addEventListener('change', onSearch);
console.log(markupEvents);
function onSearch(e) {
  e.preventDefault();
  const query = refSearchEvent.value;
  const country = refSelectCountry.value;

  EventsApi.fetchEvents(0, query, country)
    .then(events => renderEvents(events))
    .catch(error => {
      console.log('Show ooops! - Поставить заглушку');
      gallery.innerHTML = '';
      gallery.classList.remove('gallery');
      gallery.innerHTML = '<div class="error-picture"></div>';

      console.log(gallery);
    });
}
//'<h2 class="title-error">Sorry, there are no events matching your search query. Please try again </h2>';
