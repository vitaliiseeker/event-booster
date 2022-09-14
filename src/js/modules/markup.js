export function markupGallery(data) {

  return data.reduce((acc, { webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    acc +=
    `<a class="gallery__item" href="${largeImageURL}">
      <div class="photo-card">
        <img class="gallery__image"
          src="${webformatURL}" 
          alt="${tags}" 
          loading="lazy" 
          width="320" 
          height="210"
        />
        <div class="info">
          <p class="info__item">
            <b>likes</b>${likes}
          </p>
          <p class="info__item">
            <b>views</b>${views}
          </p>
          <p class="info__item">
            <b>comments</b>${comments}
          </p>
          <p class="info__item">
            <b>downloads</b>${downloads}
          </p>
        </div>
      </div>
    </a>`, "");
}