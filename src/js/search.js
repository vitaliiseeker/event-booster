import { EventsApi } from './modules/eventsApi';

import countries from './data/countries.json';

// import axios from 'axios';

// const baseRequest = axios.create({
//   baseURL: 'https://app.ticketmaster.com/discovery/v2/',
//   params: {
//     apikey: 'w8His6LGv1GwvDEPMoHLiyBhemCG7Mij',
//   },
// });

// export class eventsApi {
//   static page = 0;
//   static totalPages = null;
//   static size = 16;
//   static query = '';

//   /**
//    *
//    * @param {string} query "" (if you don't pass the argument)
//    * @param {string} country
//    * @returns result response (array);
//    */
//   static async fetchEvents(query = '', country = '') {
//     const endPoint = 'events.json';

//     const config = {
//       params: {
//         keyword: query,
//         countryCode: country,
//         size: eventsApi.size,
//         page: eventsApi.page,
//       },
//     };

//     const searchResult = await baseRequest.get(endPoint, config);
//     const response = await searchResult.data._embedded.events;

//     return response;
//   }
// }

const refSearchForm = document.querySelector('.js-search-form');
const refSearchEvent = document.querySelector('.js-search-event');
const refSearchCountry = document.querySelector('.js-input-country');
const refSelectCountry = document.querySelector('.js-select-country');
const refValuecountry = document.querySelector('.js-value-country');
const refSelectBtn = document.querySelector('.js-select-btn');

//const searchBtn = document.querySelector('.search-btn');

console.log(refValuecountry);
const markupEvents = EventsApi.fetchEvents();
//renderEvents(markupEvents);  //вызов функции рендера по умолчанию
//console.log(test);
refSearchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  //const query = e.currentTarget.elements.search - input.value;
  const query = refSearchEvent.value;
  const country = refSelectCountry.value;
  console.log(query);
  console.log(country);
  // if (refSearchFormValue === '') {
  //   console.log('Please, input event!');
  //   return;
  // }
  // eventsApi.query = e.currentTarget.elements.searchInput.value;
  //   const resultEvents = eventsApi.fetchEvents(refSearchFormValue);

  EventsApi.fetchEvents(query, country)
    .then(events => renderEvents(events))
    .catch(error => {
      console.log('Show ooops!');
    })
    .finally(() => console.log('Promise settled clear input????'));
}

function renderEvents(markupEvents) {
  // рендер
  console.log(markupEvents);
}

//--------add country to select
refSelectBtn.addEventListener('click', onSelect);

function onSelect() {
  console.log(refSelectCountry.value);

  let refSearchCountryValue = refSearchCountry.value;
  console.log(refSearchCountryValue);

  EventsApi.fetchEvents('', 'ca')
    .then(events => console.log(events))
    .catch(error => {
      console.log('Show ooops!');
    })
    .finally(() => console.log('Promise settled clear input????'));
}

const markupSelect = countries
  .map(el => `<option value="${el.code}">${el.name}</option>`)
  .join('');

refSelectCountry.insertAdjacentHTML('beforeend', markupSelect);
refSearchCountry.value = refSelectCountry.value;
console.log(refSearchCountry.value);

refSearchCountry.addEventListener('change', aaa);
function aaa() {
  refSearchCountry.value = refSearchCountry.value;
  // console.log(refSearchCountry.outerText);
}

refSearchCountry.addEventListener('input', event => {
  let a = event.currentTarget.value;
  console.log(a);
});

// const country = то что вводит пользователь
