const images = document.getElementById('imgs')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')

const image = document.querySelectorAll('#imgs img')

let index = 0
let internal = setInterval(run, 2000)

leftButton.addEventListener('click', () => {
    index--
    changeImage()
    resetInterval()
})

rightButton.addEventListener('click', () => {
    index++
    changeImage()
    resetInterval()
})

function run() {
    index++
    changeImage()
}

function changeImage() {
    if (index > image.length - 1) {
        index = 0
    } else if (index < 0) {
        index = image.length - 1
    }

    images.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}