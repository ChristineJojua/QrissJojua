import { searchByName } from "./filters.js"
import { filterByCategoryFromMenu } from "./filters.js"
import { filterByCategory } from "./filters.js"
import { showCategorys } from "./sets.js"
import { setChecked } from "./sets.js"
import { renderProducts } from "./draw.js"
import { signout, itemsOncart } from "./navbar.js"
import { getNavBar } from "./person.js"
import { getUserData } from "./person.js"


window.onload = function () {
    const userData = getUserData();
    getNavBar(userData);
    signout();

    fetch('http://localhost:3000/products').then(res => {
        return res.json();
    }).then(products => {
       
       
        // renderProducts(products);

 

        searchByName(products);

        showCategorys(products);
        
        setChecked(products);
        
        // filterByCategory(products);

        filterByCategoryFromMenu(products);
        itemsOncart(userData)

      
    })

}
