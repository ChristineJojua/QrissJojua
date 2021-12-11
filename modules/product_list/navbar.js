export function signout() {
    const signout = document.getElementById("signout");
    signout.addEventListener('click',() => {
    localStorage.removeItem('activeUser')
    document.getElementById('myBtn').style.display='flex';
    document.getElementById('signout').style.display='none'
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