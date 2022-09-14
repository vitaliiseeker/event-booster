import axios from "axios";

const BASE_URL = "https://pixabay.com/api";
const KEY = "29859369-1fbaee8b518c313527d0ab1d2";

export class ImagesAPI {
  static query = "";
  static page = 1;
  static per_page = 40;
  static page_amount = null;
  static images_amount = null;

  static async searchImages(query) {

    if (query.trim()) ImagesAPI.query = query;
    const config = {
      params: {
        q: ImagesAPI.query,
        key: KEY,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: ImagesAPI.per_page,
        page: ImagesAPI.page
      }
    }

    const response = await axios.get(`${BASE_URL}`, config);
    return response.data;
  }

  static incrementPage() {
    ImagesAPI.page += 1;
  }

  static setPageAmount() {
    ImagesAPI.page_amount = Math.ceil(ImagesAPI.images_amount / ImagesAPI.per_page);
  }

}