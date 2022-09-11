import '../css/styles.css';
import { fetchImages } from "./modules/fetchImages";
import { markupGallery } from "./modules/markup";
import debounce from 'lodash.debounce';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'right-top', width: '300px', fontSize: '20px' });

const refs = {
  form: document.querySelector("#search-form"),
  gallery: document.querySelector(".gallery"),
  loadMore: document.querySelector(".load-more"),
}

refs.form.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.target.elements.searchQuery.value.trim();
  if (!searchQuery) return Notify.failure("Enter data in the search field");

  fetchImages(searchQuery).then(showGallery).catch(onFetchError);
}

function showGallery(r) {
  console.log(r);
  console.log(r.total);
  console.log(r.totalHits);
  console.log(r.hits);




  if (r.length) {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    return;
  }
  if (r.length > 10) {
    Notify.info("Too many matches found. Please enter a more specific name.");
    return;
  }

  if (r.length > 1) {
    refs.countryList.innerHTML = markupGallery(r);
    return;
  }

  refs.countryInfo.innerHTML = markupGallery(r);
}

function onFetchError() {
  Notify.failure("Sorry, there are no images matching your search query. Please try again.");
}

function clearData(refs) {
  refs.innerHTML = "";
}



// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення.Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
// Якщо бекенд повертає порожній масив, значить нічого підходящого не було знайдено.У такому разі показуй повідомлення з текстом "Sorry, there are no images matching your search query. Please try again.".