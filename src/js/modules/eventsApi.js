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

  static links = {};
  // static query = "";

  /**
   *
   * @param {string} query "" (if you don't pass the argument)
   * @param {string} country
   * @returns result response (array);
   */
  static async fetchEvents(query = '', country = '') {
    const endPoint = `${EventsApi.baseEndPoint}events.json`;

    const config = {
      params: {
        keyword: query,
        countryCode: country,
        size: EventsApi.size,
        page: EventsApi.page,
      },
    };

    return await EventsApi.checkResponse(endPoint, config);
  }

  static async fetchEventsDefault() {
    const endPoint = `${EventsApi.baseEndPoint}events.json`;

    const config = {
      params: {
        keyword: 'piano',
        countryCode: 'US',
        size: EventsApi.size,
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
    // console.log(responseEvents);
    return responseEvents;
  }

  static async getNextPage() {
    // console.log(EventsApi.links);
    const nextLink = await baseRequest.get(`${EventsApi.links.next.href}`);
    return nextLink;
  }

  static async getPrevPage() {
    const prevLink = await baseRequest.get(`${EventsApi.links.prev.href}`);
    return prevLink;
  }
}
