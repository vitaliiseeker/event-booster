import { EventsApi } from './modules/eventsApi';
import countries from './data/countries.json';
import { renderEvents, refPagination } from '../js/modules/markupGallery';
import { gallery } from '../js/modules/markupGallery';
import way from '../images/error.png';

const refSearchForm = document.querySelector('.js-search-form');
const refSearchEvent = document.querySelector('.js-search-event');
const refSelectCountry = document.querySelector('.js-select-country');
export const markupEvents = EventsApi.fetchEvents();

markupEvents.then(data => renderEvents(data));

const markupSelect = countries
  .map(el => `<option value="${el.code}">${el.name}</option>`)
  .join('');

refSelectCountry.insertAdjacentHTML('beforeend', markupSelect);

markupEvents.then(events => renderEvents(events));

refSearchForm.addEventListener('submit', onSearch);
refSearchForm.addEventListener('change', onSearch);

function onSearch(e) {
  e.preventDefault();

  const query = refSearchEvent.value;
  const country = refSelectCountry.value;

  EventsApi.fetchEvents(0, query, country)
    .then(events => {
      renderEvents(events);
      EventsApi.page = 0;
    })
    .catch(() => {
      handleError();
    });
  gallery.style.display = 'grid';
}

function handleError() {
  refPagination.innerHTML = '';
  gallery.style.display = 'block';
  gallery.innerHTML = `<div><img src="${way}" class="error-picture" alt="Sorry, there are no events matching your search query. Please try again" width="350"></div>`;
}
