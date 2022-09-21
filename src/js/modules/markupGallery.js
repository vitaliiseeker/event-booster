export const gallery = document.querySelector('.gallery');
import imgPlace from '../../images/sprite.svg';
import imgBg from '../../images/sprite.svg';
import { renderPagination } from "./markupPagination";

export const refGallery = document.querySelector('.gallery');

export function renderEvents(data) {
  const mark = data.reduce((acc, elem) => {
    let place = elem._embedded.venues[0].name;

    return (
      acc +
      `
                      <li class="card" data-id="${elem.id}">
                      <div class="card__decore">
                      </div>
                      <div class = "card__img-wrap">

                      ${elem.images
        ? `<img class="card__img" src="${elem.images[1].url}" alt="" />`
        : `<svg class = "card-img__svg">
                                <use href='${imgBg}#icon-unload'></use>
                            </svg>`
      }  
                      </div>
                      <p class="card__name">${elem.name}</p>
                      <p class="card__date">${elem.dates.start.localDate}</p>
                      <p class="card__place">
                        ${place
        ? `<svg class = 'icon-place'>
                                <use   width= 10px height = 10px
                                href='${imgPlace}#icon-location'></use>
                                </svg>` + place
        : ''
      }
                      </p>
                      </li> 
          `
    );
  }, '');

  refGallery.innerHTML = mark;
  renderPagination();
}