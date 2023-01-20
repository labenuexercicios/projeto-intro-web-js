


const btnMenu = document.getElementById("btn-menu");
console.log(btnMenu)

function togglemenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', togglemenu);