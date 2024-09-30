const navButton = document.querySelector('.nav_button');
const nav = document.querySelector('.nav_menu')

const inputValue = document.querySelector('#email')
const buttonCopy = document.querySelector('.copy')

navButton.addEventListener('click', () => {
    nav.classList.toggle('ocult')
})

buttonCopy.addEventListener('click', () => {
    inputValue.select()
    document.execCommand('copy')
    buttonCopy.innerText = "Copiado!"
    setTimeout(() => {
        buttonCopy.innerText = "Copiar Email"
    }, 5000);
})