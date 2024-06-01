const canvas = document.getElementById('canvas')
const decreaseButton = document.getElementById('decrease')
const sizeElement = document.getElementById('size')
const increaseButton = document.getElementById('increase')
const colorElement = document.getElementById('color')
const clearElement = document.getElementById('clear')

const context = canvas.getContext('2d')

let size = 10
let isPressed = false

colorElement.value = 'black'
let color = colorElement.value

let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    console.log("Horizontal axis: ", x, "and Vertical axis: ", y)
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawLine(x, y, x2, y2)
        strokeFormat(x2, y2)

        x = x2
        y = y2
    }
})

decreaseButton.addEventListener('click', () => {
    size -= 5

    if (size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

increaseButton.addEventListener('click', () => {
    size += 5

    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

colorElement.addEventListener('change', (e) => color = e.target.value)

clearElement.addEventListener('click', () => context.clearRect(0, 0, canvas.width, canvas.height))

function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)

    context.strokeStyle = color
    context.lineWidth = size * 2
    context.stroke()
}

function strokeFormat(x, y) {
    context.beginPath()
    context.arc(x, y, size, 0, Math.PI * 2)
    context.fillStyle = color
    context.fill()
}

function updateSizeOnScreen() {
    sizeElement.innerText = size
}