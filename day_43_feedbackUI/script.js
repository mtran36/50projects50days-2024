const panel = document.querySelector('#panel')
const ratingsContainer = document.querySelector('.ratings-container')
const ratings = document.querySelectorAll('.rating')
const sendButton = document.querySelector('#send')

let selectedRating = ''

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
        console.log(selectedRating)
    } else if (e.target.parentNode.classList.contains('rating') && e.target.previousSibling && e.target.previousElementSibling.nodeName == 'IMG') {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }
})

sendButton.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <Strong>Feedback: ${selectedRating}</Strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}