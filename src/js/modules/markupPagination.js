import { EventsApi } from './eventsApi';

export const refPagination = document.querySelector('.pagination');

export function renderPagination() {
    const currentPage = EventsApi.page + 1;
    const totalPages = EventsApi.totalPages;
    let pagination = '';

    if (totalPages < 10) {
        for (let i = 1; i <= totalPages; i += 1) {
            pagination += `<li class="pagination__item">
  <button class="pagination__btn ${i === currentPage ? 'current' : ''
                }" type="button">${i}</button></li>`;
        }
    } else {
        if (currentPage < 6) {
            for (let i = 1; i < 8; i += 1) {
                pagination += `<li class="pagination__item">
          <button class="pagination__btn
            ${i === currentPage ? 'current' : ''}" type="button">${i}</button>
        </li>`;
            }
            pagination += `<li class="pagination__item">...</li>
        <li class="pagination__item">
          <button class="pagination__btn" type="button">${totalPages}</button>
        </li>`;
        } else {
            pagination = `<li class="pagination__item">
                  <button class="pagination__btn" type="button">1
                  </button>
                </li>
                <li class="pagination__item">...
                </li>`;
            if (totalPages - currentPage > 3) {
                for (let i = currentPage - 2; i <= currentPage + 2; i += 1) {
                    pagination += `<li class="pagination__item">
                            <button class="pagination__btn
                             ${i === currentPage ? 'current' : ''
                        }" type="button">${i}
                             </button>
                        </li>`;
                }
                pagination += `<li class="pagination__item">...
                    </li>
                    <li class="pagination__item">
                    <button class="pagination__btn" type="button">${totalPages}</button>
                    </li>`;
            } else {
                for (let i = currentPage - 2; i <= totalPages; i += 1) {
                    pagination += `<li class="pagination__item">
                            <button class="pagination__btn
                             ${i === currentPage ? 'current' : ''
                        }" type="button">${i}
                             </button>
                        </li>`;
                }
            }
        }
    }
    refPagination.innerHTML = pagination;
}
