import { filterByCategory } from "./filters.js"

export function showCategorys(products) {
    const searchCategory = document.getElementsByClassName('filter')[0];

        let html = '';

        const uniqueCategorys = [...new Set(products.map(product => product.category_name))];
        for (let categotyU of uniqueCategorys) {
            html += `
                    <li><div class="">                                    
                    <label class="form-check-label" for=${categotyU}>${categotyU} Decorations</label>
                    </label>
                        <input class="form-check-input" type="checkbox" value="blank" id="${categotyU}">
                    </div></li>
                    `;
        }

        searchCategory.insertAdjacentHTML('beforeend', html);
    
}

export function setChecked(products) {
    let searchParams = new URLSearchParams(window.location.search);
    var checkbox = document.getElementById(searchParams.get("category_name"));
    checkbox.checked = true;
    
    filterByCategory(products);
}
