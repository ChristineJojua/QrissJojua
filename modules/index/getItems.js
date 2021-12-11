export function getItems(products) {
    fetch('http://localhost:3000/products').then(res => {
        return res.json()
      }).then(response => {
    
        const products = response;

        let first = products.filter(p => p.category_name === 'Home')[0];
        
        let secons = products.filter(p => p.category_name === 'Handmade')[0];
  
        let third = products.filter(p => p.category_name === 'Tree')[0];
 
        let productElement = document.getElementById('prods');

        let totalhtml = ` 

        <div class="bg">
        <img class="img-ld" src="${first.img}">
          <div class="overlay">
            <a href="./product_detail.html?id=${first.id}">
            <h2 class="first">Check This <span class="first">Out!</span></h2></a>
            </a>
          </div>
        </div>
        </div>
        <div class="bg">
        <img class="img-ld" src="${secons.img}">
          <div class="overlay">
            <a href="./product_detail.html?id=${secons.id}">
            <h2 class="first">Check This <span class="first">Out!</span></h2></a>
            </a>
          </div>
        </div>
        <div class="bg">
          <img class="img-ld" src="${third.img}">
          <div class="overlay">
          <a href="./product_detail.html?id=${third.id}">
          <h2 class="first">Check This <span class="first">Out!</span></h2></a>
            </a>
          </div>
        </div>


        `;
            productElement.insertAdjacentHTML('beforeend', totalhtml);
        })


      }
    
