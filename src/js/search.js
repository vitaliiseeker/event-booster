import { EventsApi } from './modules/eventsApi';
import countries from './data/countries.json';
import { renderEvents } from '../js/modules/markupGallery';
const refSearchForm = document.querySelector('.js-search-form');
const refSearchEvent = document.querySelector('.js-search-event');
const refSelectCountry = document.querySelector('.js-select-country');
const refValuecountry = document.querySelector('.js-value-country');

const markupEvents = EventsApi.fetchEvents();
markupEvents.then(data => renderEvents(data));
//console.log(markupEvents);

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
    .then(events => renderEvents(events))
    .catch(error => {
      console.log('Show ooops! - Поставить заглушку');
    });
}
