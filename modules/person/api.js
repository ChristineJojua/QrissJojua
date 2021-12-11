export function getCardItems(){ 
    return fetch('http://localhost:3000/cart').then(res => {
    return(res.json())
})
}