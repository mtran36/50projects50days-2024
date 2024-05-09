const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    // Adds the interactive progress slider
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    // At 1: Prev Disable, Next Enable
    if(currentActive == 1) {
        prev.disabled = true
    // At 4: Prev Enable, Next Disable
    } else if (currentActive == circles.length) {
        next.disabled = true
    // At 1, 2: Both Enable
    } else {
        prev.disabled = false
        next.disabled = false
    }
}