export function signout() {
    const signout = document.getElementById("signout");
    signout.addEventListener('click',() => {
    localStorage.removeItem('activeUser')
    document.getElementById('myBtn').style.display='flex';
    document.getElementById('signout').style.display='none';
    document.getElementById('cart').style.display='none';
    })   
}




