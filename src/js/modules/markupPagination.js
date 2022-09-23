import { EventsApi } from './eventsApi';

export const refPagination = document.querySelector('.pagination');

export function renderPagination() {
    const currentPage = EventsApi.page + 1;
    const totalPages = EventsApi.totalPages;
    // const currentPage = 3;
    // const totalPages = 8;
    const difference = totalPages - currentPage;
    const firstPage = `<li><button class="pagination__btn" type="button">1</button></li>`;
    const lastPage = `<li><button class="pagination__btn" type = "button">${totalPages}</button ></li >`;
    const dots = `<li class="pagination__item">...</li>`;
    // const subPagesEnd = ;
    // const prevPagesStart =;
    let pagination = '';

    if (totalPages < 8) {
        for (let i = 1; i <= totalPages; i += 1) {
            pagination += `<li class="pagination__item"><button class="pagination__btn ${i === currentPage ? 'current' : ''}"
            type="button">${i}</button></li>`;
        }
    };

    if (currentPage < 6 && totalPages >= 8) {
        for (let i = 1; (i <= currentPage + 2) || (i <= 5); i += 1) {
            pagination += `<li class="pagination__item"><button class="pagination__btn ${i === currentPage ? 'current' : ''}" type="button">${i}</button></li>`;
        }
        pagination += (difference > 3) ? dots : "";
        pagination += lastPage;
    };

    if (currentPage >= 6 && totalPages >= 8) {
        pagination += firstPage + dots;

        if (difference > 4) {
            for (let i = currentPage - 2; i <= currentPage + 2; i += 1) {
                pagination += `<li class="pagination__item"> <button class="pagination__btn ${i === currentPage ? 'current' : ''}" type="button">${i}</button></li>`;
            }
            pagination += dots + lastPage;
        } else {
            const prevPagesStart = (difference > 2) ? totalPages - difference - 2 : totalPages - 4;
            for (let i = prevPagesStart; i <= totalPages; i += 1) {
                pagination += `<li class="pagination__item"><button  class="pagination__btn ${i === currentPage ? 'current' : ''}"  type="button">${i}</button></li>`;
            }
        }
    }

    refPagination.innerHTML = pagination;
}