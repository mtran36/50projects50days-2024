const toggle = document.querySelector('.toggle')
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"]

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// Example for Style Sheet:
//      Hours: 1 -> (1 - 0) * (360 - 0) / (12 - 0) + 0 = 30deg
//      Minutes: 30 -> (30 - 0) * (360 - 0) / (60 - 0) + 0 = 180deg
//      Seconds: 45 -> (45 - 0) * (360 - 0) / (60 - 0) + 0 = 270deg
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

setTime()

setInterval(setTime, 1000)

function setTime() {
    const time = new Date()

    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()

    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    const hoursForClock = hours >= 13 ? hours % 12 : hours
    const ampm = hours >= 12 ? 'PM' : 'AM'

    // Minutes logic: If minute is 0-9, add leading zeros 
    // -> Ex. at 1 minute = 1:01 instead of 1:1
    timeElement.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
}