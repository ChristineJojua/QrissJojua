import { DrawItemsoncart, drawOrderedProducts, drawTotalOrderPice, DrawUserData } from "./draw.js"
import { signout } from "./navbar.js"
import { itemsOncart, placeOrder } from "./operations.js"
import { getNavBar, getUserData } from "./person.js"


const userData = getUserData();
getNavBar(userData);

signout(userData);
DrawUserData(userData);
let count = itemsOncart(userData);
debugger;

fetch('http://localhost:3000/cart').then(res => {
  return res.json()
}).then(cart => {

  const cartItems = cart;
  const userData = getUserData ();


  const searchedItems = cartItems.filter(i => i.user === userData.email && i.deleted === 0);

  console.log(searchedItems)

  DrawItemsoncart(searchedItems)
  drawTotalOrderPice(searchedItems)
  placeOrder(searchedItems)
  drawOrderedProducts()
})

