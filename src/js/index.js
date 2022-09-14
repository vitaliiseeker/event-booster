import '../css/styles.css';
import { ImagesAPI } from "./modules/ImagesAPI";
import { markupGallery } from "./modules/markup";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'right-top', width: '300px', fontSize: '20px' });

const refs = {
  form: document.querySelector(".search-form"),
  gallery: document.querySelector(".gallery"),
  loadMore: document.querySelector(".js-load-more"),
}

let gallery = null;

refs.form.addEventListener("submit", onSearch);
refs.loadMore.addEventListener("click", onloadMore);

async function onSearch(e) {
  e.preventDefault();
  refs.loadMore.classList.add("is-hidden");
  clearGallery();

  const searchQuery = e.target.elements.searchQuery.value.trim();
  if (!searchQuery) return Notify.failure("Enter data in the search field");

  ImagesAPI.page = 1;

  try {
    const data = await ImagesAPI.searchImages(searchQuery);
    ImagesAPI.images_amount = data.totalHits;
    ImagesAPI.setPageAmount();
    if (ImagesAPI.images_amount) Notify.info(`Hooray! We found ${ImagesAPI.images_amount} images.`);

    createGallery(data);
    createGalleryLightbox();

  } catch (err) {
    console.log(err);
  };
}

async function onloadMore() {
  ImagesAPI.incrementPage();

  try {
    const data = await ImagesAPI.searchImages("");
    createGallery(data);
    gallery.refresh();

    const { height: cardHeight } = document
      .querySelector(".gallery")
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 1.75,
      behavior: "smooth",
    });

  } catch (err) {
    console.log(err);
  }
}

function createGallery({ hits }) {
  if (!hits.length) {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    return;
  }
  refs.loadMore.classList.remove("is-hidden");
  if (ImagesAPI.page >= ImagesAPI.page_amount) {
    refs.loadMore.classList.add("is-hidden");
    Notify.info("We're sorry, but you've reached the end of search results.");
  }
  refs.gallery.insertAdjacentHTML("beforeend", markupGallery(hits));
}

function createGalleryLightbox() {
  gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
  });
}

function clearGallery() {
  refs.gallery.innerHTML = "";
}