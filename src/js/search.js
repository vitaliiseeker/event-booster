import { EventsApi } from './modules/eventsApi';

import code from './data/countries.json';

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

const searchBox = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const selectCountry = document.querySelector('.select-country');
const selectInput = document.querySelector('.select-country-js');
const valuecountry = document.querySelector('.value-country');
const selectBtn = document.querySelector('.select-btn-js');

searchBox.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const query = searchInput.value;

  EventsApi.fetchEvents(query)
    .then(events => renderEvents(events))
    .catch(error => {
      console.log('Show ooops!');
    })
    .finally(() => console.log('Promise settled clear input????'));
}

function renderEvents(events) {
  // рендер
  console.log(events);
}

//--------add country to select
selectBtn.addEventListener('click', onSelect);

function onSelect() {
  //   let z = document.getElementById('select').value;
  //   console.log(z);
  //   let searchCountryValue = selectCountry.value;
  //   console.log(searchCountryValue);
  //   EventsApi.fetchEvents('', 'ca')
  //     .then(events => console.log(events))
  //     .catch(error => {
  //       console.log('Show ooops!');
  //     })
  //     .finally(() => console.log('Promise settled clear input????'));
}

const markupSelect = code
  .map(el => `<option value="${el.code}">${el.name}</option>`)
  .join('');

selectCountry.insertAdjacentHTML('beforeend', markupSelect);
// selectInput.value = selectCountry.value;
// console.log(selectInput.value);
