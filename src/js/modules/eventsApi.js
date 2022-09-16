import axios from 'axios';

const baseRequest = axios.create({
  baseURL: 'https://app.ticketmaster.com/discovery/v2/',
  params: {
    apikey: 'w8His6LGv1GwvDEPMoHLiyBhemCG7Mij',
  },
});

export class eventsApi {
  static page = 0;
  static totalPages = null;
  static size = 16;
  // static query = "";

  /**
   *
   * @param {string} query "" (if you don't pass the argument)
   * @param {string} country
   * @returns result response (array);
   */
  static async fetchEvents(query = '', country = '') {
    const endPoint = 'events.json';

    const config = {
      params: {
        keyword: query,
        countryCode: country,
        size: eventsApi.size,
        page: eventsApi.page,
      },
    };

    const searchResult = await baseRequest.get(endPoint, config);
    const response = await searchResult.data._embedded.events;
    return response;
  }
}
