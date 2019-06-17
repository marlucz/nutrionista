import populateResults from './searchUI';
import {
    selectors
} from './selectors';

const Pagination = {

    totalItems: 1,
    recipesPerPage: 1,
    pageCur: 1,

    totalPages: () => {
        return Math.ceil(Pagination.totalItems / Pagination.recipesPerPage);
    },

    prevPage: () => {
        if (Pagination.pageCur > 1) {
            Pagination.pageCur--;
            Pagination.changePage(Pagination.pageCur);
        }
    },

    nextPage: () => {
        if (Pagination.pageCur < Pagination.totalPages()) {
            Pagination.pageCur++;
            Pagination.changePage(Pagination.pageCur);
        }
    },

    changePage: (page) => {
        console.log(page);
        let pagination;
        Pagination.pageCur = page;
        console.log(page, Pagination.pageCur);
        // ensure current page isn't out of range
        if (Pagination.pageCur < 1) {
            Pagination.pageCur = 1;
        } else if (Pagination.pageCur > Pagination.totalPages()) {
            Pagination.pageCur = Pagination.totalPages();
        }

        pagination = `
                <li class="pagination__item" data-gotopage='prevPage'>
                                <a href="" class="pagination__link"><span aria-hidden="true">«</span><span class="visuallyhidden">previous set of pages</span></a>
                            </li>  
                `;
        for (let i = 1; i <= Pagination.totalPages(); i++) {
            pagination += `
                        <li class="pagination__item" data-gotopage=${i}>
                            <a href="" class="pagination__link" ${i === Pagination.pageCur ? 'aria-current="page"' : '' } ><span class="visuallyhidden">page </span>${i}</a>
                        </li>
                        `
        }
        pagination += `
                <li class="pagination__item" data-gotopage='nextPage'>
                     <a href="" class="pagination__link"><span aria-hidden="true">»</span><span class="visuallyhidden">next set of pages</span></a>
                 </li>  
                `
        selectors.paginationList.insertAdjacentHTML('afterbegin', pagination);

    }
}



export default Pagination;