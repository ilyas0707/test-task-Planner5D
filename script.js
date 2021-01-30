let d = document
let menuButton = d.getElementById('hamburger'),
    menu = d.getElementById('nav')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active')
    menu.classList.toggle('active')
})