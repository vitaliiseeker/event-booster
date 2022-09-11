export function markupGallery(data) {

  return data.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `<div class="photo-card">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>${likes}</b>
        </p>
        <p class="info-item">
          <b>${views}</b>
        </p>
        <p class="info-item">
          <b>${comments}</b>
        </p>
        <p class="info-item">
          <b>${downloads}</b>
        </p>
      </div>
    </div>
    `);
}

// webformatURL - посилання на маленьке зображення для списку карток.
//   largeImageURL - посилання на велике зображення.
//     tags - рядок з описом зображення.Підійде для атрибуту alt.
//       likes - кількість лайків.
//         views - кількість переглядів.
//           comments - кількість коментарів.
//             downloads - кількість завантажень.