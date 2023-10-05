// let toggleBtn = document.getElementById('toggleBtn')
let toggleButtonIcon = document.getElementById('toggleButtonIcon')
let isDarkTheme = false

function darktheme() {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.classList.add('dark')
        toggleButtonIcon.classList.replace('fa-moon','fa-sun')
    } else {
        document.body.classList.remove('dark')
        toggleButtonIcon.classList.replace('fa-sun','fa-moon')
    }   
}