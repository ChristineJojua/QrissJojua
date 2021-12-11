
import { getUserData } from "./person.js"
import { getNavBar } from "./person.js"
import { signout } from "./navbar.js"
import { itemsOncart } from "./navbar.js"
import { getItems } from "./getItems.js"


const userData = getUserData()

getNavBar(userData)
itemsOncart(userData)
getItems()
signout(userData)

