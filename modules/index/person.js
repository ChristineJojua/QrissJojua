
export function getUserData() {
    const userData = JSON.parse(localStorage.getItem('activeUser'))
    return userData
}


export function getNavBar(userData) {
    console.log(userData)

    if(userData){

        document.getElementById('username').innerHTML = userData.fname +' '+ userData.lname;
        document.getElementById('myBtn').style.display = 'none';
        document.getElementById('signout').style.display='flex';
        document.getElementById('cart').style.display='flex';
    }else{
        document.getElementById('signout').style.display='none';
        document.getElementById('cart').style.display='none';
        document.getElementById('myBtn').style.display= 'flex';

    }}


    