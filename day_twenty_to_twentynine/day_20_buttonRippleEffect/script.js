const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Get pointer location
        // pageX = Horizontal coordinate, pageY = Vertical coordinate
        const x = e.pageX
        const y = e.pageY

        console.log("X-Axis: ", x, "and Y-Axis: ", y)

        // offsetTop = Get pixels of button top position
        // offsetLeft = Get pixels of button left position
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        console.log("Top Offset: ", buttonTop, "and Left Offset: ", buttonLeft)

        // Value from pointer to button offset
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        console.log("Button at X: ", xInside, "Button at Y: ", yInside)

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        // Clear ripple effect after 500ms
        setTimeout(() => circle.remove(), 500)
    })
})