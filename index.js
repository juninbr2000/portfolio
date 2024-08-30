const navButton = document.querySelector('.nav_button');
const nav = document.querySelector('.nav_menu')


navButton.addEventListener('click', () => {
    nav.classList.toggle('ocult')
})