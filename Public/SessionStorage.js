const loginButton = document.getElementById('loginButton');
const SignButton = document.getElementById('SingUpButton');

loginButton.addEventListener('click', (e)=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('contraseña').value;

    sessionStorage.setItem('email', email)
    sessionStorage.setItem('contraseña', password)
})