const nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    // .scrollY -> returns number of pixel scroll vertically
    console.log(window.scrollY)

    // .offsetHeight -> return the offset height of the nav
    console.log(nav.offsetHeight)

    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}