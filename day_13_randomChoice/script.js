const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

// Assign Enter as the action button.
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {

    // Split: separate tags by ','
    // Filter: for each tag - if string is not empty, trim whitespace
    // Map: manipulate array, for each tag - return an array with the tag trimmed
    const tags = input.split(',').filter(tag => tag.trim() != '').map(tag => tag.trim())

    tagsElement.innerHTML = ''

    tags.forEach(tag => {
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        tagsElement.appendChild(tagElement)
    })
}

function randomSelect() {
    const times = 30

    // Highlight and unhighlight after a certain amount of time.
    const interval = setInterval(() => {
        // Get all of the tags created.
        const randomTag = pickRandomTag()

        if (randomTag != undefined) {
            highlightTag(randomTag)

            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100);

    // Stop the randomizer and highlight the tag.
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}