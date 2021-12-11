


export function getCurrentProduct() {
  
}

  fetch('http://localhost:3000/products').then(res => {
    return res.json()
  }).then(response => {

    const products = response;


    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('id')) {
      return;
    }

    let id = searchParams.get('id');
    let searchedProducts = products.filter(i => i.id == id);

    if (searchedProducts != undefined && searchedProducts.length > 0) {
      let product = searchedProducts[0];


      let productElement = document.getElementById('product_detail');


      let html = ` 
  
        
        <div class="row align-items-center">
          <div class="col-md-5 p-4">
            <div class="text-center">
                
                <img class="img-thumbnail" src="${product.img}">
            </div>
          </div>
          <div class="col-md-7">
            <div class="">
                <div class="">
                    <h4 class="title">${product.name}</h4>
                    <h5 class="sourceSP text-muted">${product.price}<span>${product.currency}</span></h5>

                    
                    <h5 class="sourceSP mt-4 py-2">Overview :</h5>
                    <div><span class="sourceSP">${product.category_name}</span></div>
                    <p class="det text-muted">${product.desc}</p>

                    <div class="row mt-4 pt-2">
                        <button id="add_to_card"><a class="btn btn-soft-primary ml-2">Add to Cart</a></button>

                    </div><!--end row-->
                </div>
            </div>
          </div>
        </div>
                     `;

      productElement.insertAdjacentHTML('beforeend', html);

      const btn = document.getElementById('add_to_card');

      btn.addEventListener('click', () => {
        addToCardButton(product);
      });

    }
  });

  function addToCardButton(product) {

    const userData = JSON.parse(localStorage.getItem('activeUser'));

    let data = {

      product_id: product.id,
      product_name: product.name,
      product_price: product.price,
      count: 1,
      user: userData.email,
      deleted: 0,
      totalItemPrice: product.price
    };

    fetch('http://localhost:3000/cart')
      .then(res => {
        return res.json();
      }).then(cartproducts => {
        const filteredCartItem = cartproducts.filter(c => c.id === product.id && c.user === userData.email);

        if (filteredCartItem.length > 0) {

          data.count = filteredCartItem[0].count += 1;
          data.totalItemPrice = filteredCartItem[0].totalItemPrice += filteredCartItem[0].totalItemPrice;

          fetch(`http://127.0.0.1:3000/cart/${product.id}`, {

            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

        } else {
          fetch('http://127.0.0.1:3000/cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })

        }
      });

  }



