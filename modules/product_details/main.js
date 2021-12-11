

import { signout, itemsOncart } from "./navigation.js"
import { getNavBar, getUserData } from "./person.js"
import { getCurrentProduct } from "./product_detail.js"


const userData = getUserData()

getNavBar(userData)

itemsOncart(userData)

signout(userData)
getCurrentProduct()