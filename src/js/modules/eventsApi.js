import axios from 'axios';

const baseRequest = axios.create({
    baseURL: "https://app.ticketmaster.com/",
    params: {
        apikey: "w8His6LGv1GwvDEPMoHLiyBhemCG7Mij",
    }
});

export class EventsApi {
    static page = 0;
    static totalPages = null;
    static size = 16;
    static baseEndPoint = "discovery/v2/";

    static links = {};
    // static query = "";

  /**
   *
   * @param {string} query "" (if you don't pass the argument)
   * @param {string} country
   * @returns result response (array);
   */  
    static async fetchEvents(query = "", country = "") {
        const endPoint = `${EventsApi.baseEndPoint}events.json`;

        const config = {
            params: {
                keyword: query,
                countryCode: country,
                size: EventsApi.size,
                page: EventsApi.page,
            }
        }

        const searchResult = await baseRequest.get(endPoint, config);

        const pagination = await searchResult.data;
        const response = await searchResult.data._embedded.events;
        return pagination;
    }

    static async fetchEventsDefault() {
        const endPoint = `${EventsApi.baseEndPoint}events.json`;

        const config = {
            params: {
                keyword: "piano",
                countryCode: "US",
                size: EventsApi.size,
            }
        }

        const searchResult = await baseRequest.get(endPoint, config);
        const response = await searchResult.data._embedded.events;
        return searchResult;
    }

    static async fetchEventsById(id) {
        const endPoints = `${EventsApi.baseEndPoint}events/${id}`;

        const searchResult = await baseRequest.get(endPoints);
        const response = await searchResult.data;
        return response;
    }

    // static async checkResponse(endPoint, config) {
    //     try {
    //         const searchResult = await baseRequest.get(endPoint, config);
    //         if (condition) {
                
    //         }

    //         const response = await searchResult.data._embedded.events;
    //         return searchResult;
    //     } catch (error) {
            
    //     }        
    // }

    static async getNextPage() {
        console.log(EventsApi.links);
        const nextLink = await baseRequest.get(`${EventsApi.links.next.href}`);
        console.log(nextLink);
        return nextLink;
    }
    
    // static async getPrevPage() {
    //     const prevLink = await baseRequest.get(`${this.links.prev}`);
    //     console.log(prevLink);
    //     return prevLink;
    // }
};

EventsApi.fetchEvents("dragon").then((item) => console.log(item));

