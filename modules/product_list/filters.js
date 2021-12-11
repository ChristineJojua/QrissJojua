import { paginate } from "./pagination.js";

export function searchByName(products) {
    const searchName = document.getElementById("name_search");
    searchName.addEventListener('keyup', () => {
        const searchFiieldValue = searchName.value.toLowerCase();
        const filteredproducts = products.filter(p => p.name.toLowerCase().includes(searchFiieldValue));
        paginate(filteredproducts);
    });
}


export function filterByCategoryFromMenu(products) {

    var checkboxes = document.querySelectorAll("input[type=checkbox][class=form-check-input]");

    // Use Array.forEach to add an event listener to each checkbox.
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            filterByCategory(products);
        })
    });
}


export function filterByCategory(products) {
    var checkboxes = document.querySelectorAll("input[type=checkbox][class=form-check-input]");

    var checkedcategorys = Array.from(checkboxes).filter(i => i.checked); // Convert checkboxes to an array to use filter and map.

    var filteredproductsBycategory = [];

    if (checkedcategorys.length == 0) {
        filteredproductsBycategory = products;
    }

    for (let a = 0; a < checkedcategorys.length; a++) {
        let categoryFiltered = products.filter(p => p.category_name == checkedcategorys[a].id);

        categoryFiltered.forEach(element => {
            filteredproductsBycategory.push(element);
        });
    }
    paginate(filteredproductsBycategory);

}


