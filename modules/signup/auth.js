


function authorize(user) {
  localStorage.setItem('activeUser', JSON.stringify(user));
  window.location.href = 'http://127.0.0.1:8080/index.html'
}



export function authorization() {

  fetch('http://localhost:3000/users').then(res => {
    return res.json()
  }).then(response => {
    const users = response;
    console.log(users)

    const submit = document.getElementById('register').addEventListener('click', () => {

      const fnameUser = document.getElementById('fname').value;
      const lnameUser = document.getElementById('lname').value;
      const emailUser = document.getElementById('email').value;
      const password1 = document.getElementById('Password1').value;
      const password2 = document.getElementById('Password2').value;

      if (password1 === password2) {
        const user = {
          fname: fnameUser,
          lname: lnameUser,
          email: emailUser,
          password: password1
        }
        const usersWithSameEmail = users.filter(u => u.email === emailUser);
        if (usersWithSameEmail.length > 0) {
          alert("email already in use")
        } else {
          fetch('http://127.0.0.1:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          });
          authorize(user)
        }

      } else {
        alert("Passwords not match")
      }
    }
    )}
  )
}



