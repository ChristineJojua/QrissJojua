import { renderProducts } from './draw.js';


export const ITEM_COUNT = 6;
let pageCount = 0;

let products = []
let currentPage = 1;

export function paginate(p) {

    products = p;
    const paginationEl = document.getElementsByClassName('pagination')[0];
    paginationEl.innerHTML = "";
    pageCount = Math.trunc(products.length / ITEM_COUNT);
    if (products.length % ITEM_COUNT > 0) {
        pageCount += 1;
    }

    const prods = ITEM_COUNT * (currentPage - 1);
    renderProducts(products.slice(prods, prods + ITEM_COUNT));

    let html = '';
    for (let i = 1; i <= pageCount; i++) {
        html += `<li class="page-item ${i == 1 ? 'active' : null}"><a class="page-link">${i}</a></li>`;
    }
    html = '<li class="page-item disabled"><a class="page-link">Previous</a></li>' + html + '<li class="page-item"><a class="page-link">Next</a></li>';
    paginationEl.insertAdjacentHTML('beforeend', html);

    const pageItemEls = [...document.getElementsByClassName('page-item')];
    for (let item of pageItemEls) {
        let page = item;
        page.addEventListener('click', (ev) => {
            changePage(ev.target.innerText);
        })
    }

}

function changePage(page) {
    if (page === 'Next') {
        if (currentPage !== pageCount) {
            navigate(currentPage + 1);
        }
    } else if (page === 'Previous') {
        if (currentPage !== 1) {
            navigate(currentPage - 1);
        }
    } else {
        navigate(page)
    }
}

function navigate(page) {
    const pageItemEls = [...document.getElementsByClassName('page-item')];
    const p = +page;
    if (p === currentPage) {
        return;
    }
    currentPage = p;
    const prods = ITEM_COUNT * (p - 1);
    renderProducts(products.slice(prods, prods + ITEM_COUNT));
    pageItemEls.map(p => p.classList.remove('active'));
    pageItemEls.map(p => {
        if (p.innerText == currentPage) {
            p.classList.add('active');
        }
    });

    if (currentPage == 1) {
        pageItemEls[0].classList.add('disabled');
    } else {
        pageItemEls[0].classList.remove('disabled');
    }

    if (pageCount == p) {
        pageItemEls[pageItemEls.length - 1].classList.add('disabled');
    } else {
        pageItemEls[pageItemEls.length - 1].classList.remove('disabled');
    }
}