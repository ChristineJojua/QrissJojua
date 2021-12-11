
export function drawTotalOrderPice(searchedItems) {
    let productElement = document.getElementById('total');
    if (searchedItems.length > 0) {
        let sum = searchedItems.map(o => o.totalItemPrice).reduce((a, c) => { return a + c });
        console.log(sum);
        let totalhtml = ` <span class="total_value">Total Value: ${sum} </span>
    `;
        productElement.insertAdjacentHTML('beforeend', totalhtml);
    }
    else {
        let totalhtml = ` <span class="total_value"> 'Your cart is empty '</span> `
        productElement.insertAdjacentHTML('beforeend', totalhtml);
    }
}




export function DrawItemsoncart(searchedItems) {
    for (let item of searchedItems) {
        let productElement = document.getElementById('orderlist');
        let html = `  
          <tr>
          <td>${item.product_name}</td>
          <td>${item.product_price}</td>
          <td>${item.totalItemPrice}</td>
          <td>${item.count}</td>
          </tr>
                       `;
        productElement.insertAdjacentHTML('beforeend', html);

    }
}

export function drawOrderedProducts() {
    const orderListEl = document.getElementById('orderHistorylist');
    let html = '';
    fetch('http://127.0.0.1:3000/orders').then(res => {
        return res.json()
    }).then(r => {
        const orderedProducts = r;
        for (let ordered of orderedProducts) {
            html += `<tr>
                        <td>${ordered.orderedProduct[0].product_name}</td>
                        <td>${ordered.orderedProduct[0].count}</td>
                        <td>${ordered.price}</td>
                        <td>${ordered.status}</td>
                    </tr>`
        }
        orderListEl.insertAdjacentHTML('beforeend', html) // prosta chavwere chaaaswore mere
    })
}


export function DrawUserData() {
    const userData = JSON.parse(localStorage.getItem('activeUser'))

   
        let usertElement = document.getElementById('person-data');
        let html = `  
        <div class="userCard">

          <span class="card-span" >Name: ${userData.fname + " " +  userData.lname}</span>
          <span class="card-span" >Email:${userData.email}</span>

          </div>
                       `;
        usertElement.insertAdjacentHTML('beforeend', html);

    }
