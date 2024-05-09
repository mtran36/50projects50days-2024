// Create a list of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// Loop through the list and for each sound, do the following
//   1. Create an element called button
//   2. For each sound, create a btn class
//   3. For each sound, create a label for the btn
//   3. Add an event listener to each btn
//      a. For each button clicked, play/pause the song
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

// Scenario:
//   1. Click one sound, then click another sound
//      a. Sound_0 will stop, Sound_1 will start
//   2. Click one sound, then click sound again
//      b. Sound_0 will stop, Sound_0 will start again
// 
// Purpose: Ensure that for every click, sounds won't play over one another.
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}