import axios from 'axios';

const baseRequest = axios.create({
  baseURL: 'https://app.ticketmaster.com/',
  params: {
    apikey: 'w8His6LGv1GwvDEPMoHLiyBhemCG7Mij',
  },
});

export class EventsApi {
  static page = 0;
  static totalPages = null;
  static size = 16;
  static baseEndPoint = 'discovery/v2/';
  static query = '';
  static country = '';

  /**
   *
   * @param {number} page 0 (if the first query)
   * @param {string} query "" (if you don't pass the argument)
   * @param {string} country
   * @returns response (array)
   */
  static async fetchEvents(page = '', query = '', country = '') {
    const endPoint = `${EventsApi.baseEndPoint}events.json`;
    if (page) {
      EventsApi.page = page;
    }
    if (query) {
      EventsApi.query = query;
    }
    if (country) {
      EventsApi.country = country;
    }

    const config = {
      params: {
        keyword: EventsApi.query,
        countryCode: EventsApi.country,
        size: EventsApi.size,
        page: EventsApi.page,
      },
    };

    return await EventsApi.checkResponse(endPoint, config);
  }

  static async fetchEventsById(id) {
    const endPoints = `${EventsApi.baseEndPoint}events/${id}`;

    const searchResult = await baseRequest.get(endPoints);
    const response = await searchResult.data;
    return response;
  }

  static async checkResponse(endPoint, config) {
    const searchResult = await baseRequest.get(endPoint, config);
    const response = await searchResult.data;

    if (!response._embedded) {
      throw new Error('Oops, not found!');
    }

    const responseEvents = response._embedded.events;
    return responseEvents;
  }
}
