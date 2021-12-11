
export function renderProducts(products) {

    const list = document.getElementsByClassName('products')[0];
    list.innerHTML = '';
    let html = '';
    for (let product of products) {
        html += `
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
        <div class="card shop-list border-0 position-relative overflow-hidden ">
            <div class="shop-image position-relative overflow-hidden rounded shadow">
                <a href="./product_detail.html?id=${product.id}"><img src="${product.img}" class="img-fluid" alt=""></a>     
            </div>
            <div class="card-body content pt-4 p-2">
              <span class="card-span">${product.name}</span>
                <div class="d-flex justify-content-between mt-1">
                    <span class="card-span text-muted small font-italic mb-0 mt-1">Price ${product.price}${product.currency}</span>
                </div>
            </div>
        </div>
    </div>
        
        `;
    }

    list.insertAdjacentHTML('beforeend', html);
}