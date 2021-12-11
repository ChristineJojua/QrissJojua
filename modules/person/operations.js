
import { drawOrderedProducts } from './draw.js'

function updateCard(searchedItems) {
    for (let item of searchedItems) {
        var obj = item;
        obj.deleted = 1;
        fetch(`http://127.0.0.1:3000/cart/${obj.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
    }
}

export function placeOrder(searchedItems) {
    document.getElementById('chkBtn').addEventListener('click', () => {
        debugger;
        if (searchedItems.length > 0) {

            let sum = searchedItems.map(o => o.totalItemPrice).reduce((a, c) => { return a + c });

            const OrderRecord = {
                orderDate: new Date,
                orderedProduct: searchedItems,
                price: sum,
                status: "placed"
            };

            fetch('http://127.0.0.1:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(OrderRecord),
            })
            updateCard(searchedItems); // es ra aris ? xo martalia
            drawOrderedProducts(); // chaamate sadac gchirdeba es funciac


        } else {
            alert("Your Cart is Empty!")
        }
    })
}



export function itemsOncart(userData) {
    fetch('http://localhost:3000/cart').then(res => {
        return res.json();
    }).then(cproducts => {
        const cartproducts = cproducts;
        if(userData){

        const filteredCartItem = cartproducts.filter(c => c.user === userData.email && c.deleted === 0);

        let numOnCart = 0;
        if (filteredCartItem.length > 0) {
            numOnCart = filteredCartItem.length;
            console.log(numOnCart)
        }
        document.getElementById('cart-count').innerText = numOnCart;
    } })
}
