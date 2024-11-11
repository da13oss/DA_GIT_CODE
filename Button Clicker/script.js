//header login and logout button
let loginBtn = document.querySelector('button');
let message = document.querySelector('button');

loginBtn.addEventListener('click', ()=>{
    loginBtn.innerText = 'Logout'
    message.innerText = 'Login'
})



// Dojonary add Definition Button

// Function to remove text
function hide(element) {
    element.remove();
}

