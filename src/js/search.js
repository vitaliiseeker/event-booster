import { EventsApi } from './modules/eventsApi';
import countries from './data/countries.json';
import { renderEvents, gallery } from '../js/modules/markupGallery';
import { refPagination } from './modules/markupPagination';
import pictureWay from '../images/error.png';

const refSearchForm = document.querySelector('.js-search-form');
const refSearchEvent = document.querySelector('.js-search-event');
const refSelectCountry = document.querySelector('.js-select-country');
export const markupEvents = EventsApi.fetchEvents();

markupEvents.then(data => renderEvents(data));

const markupSelect = countries
  .map(el => `<option value="${el.code}">${el.name}</option>`)
  .join('');

refSelectCountry.insertAdjacentHTML('beforeend', markupSelect);

refSearchForm.addEventListener('submit', onSearch);
refSearchForm.addEventListener('change', onSearch);

export function onSearch(e) {
  e.preventDefault();

  const query = refSearchEvent.value;
  const country = refSelectCountry.value;
  EventsApi.clearParams();
  EventsApi.fetchEvents(0, query, country)
    .then(events => renderEvents(events))
    .catch(() => {
      handleError();
    });
  gallery.style.display = 'grid';
}

function handleError() {
  gallery.style.display = 'block';
  gallery.innerHTML = `<div><img src="${pictureWay}" class="error-picture" alt="Sorry, there are no events matching your search query. Please try again" width="350"></div>`;
  refPagination.innerHTML = '';
}
