const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        // Assign 'target' with each of the counter's data-target's value.
        const target = +counter.getAttribute('data-target')

        // Assign 'count' to current value.
        const count = +counter.innerText

        // Assign 'increment' to divisible of target value by 200.
        const increment = target / 200

        // Increment counter value until count >= target
        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})