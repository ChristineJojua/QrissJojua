
export function logIn() {

    fetch('http://localhost:3000/users').then(res => {
        debugger
        return res.json()
    }).then(response => {
        const users = response;
        console.log(users)
     
    
        const submit = document.getElementById('login').addEventListener('click', () => {

            const emailUser = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const usersWithSameEmail = users.filter(u => u.email === emailUser && u.password === password);
            if (usersWithSameEmail.length > 0) {
    
                let user = usersWithSameEmail[0]
                authorize(user)
    
            } else {
                alert("Register First");
    
    
            }
         }   
        )
        }
        )
    }
        
    
    
     function authorize(user) {
        localStorage.setItem('activeUser', JSON.stringify(user));
        window.location.href = 'http://127.0.0.1:8080/index.html'
    
    }