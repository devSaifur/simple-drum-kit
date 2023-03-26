const drumBtn = document.querySelectorAll(".drum")
const soundTom1 = new Audio ("sounds/tom-1.mp3")
const soundTom2 = new Audio ("sounds/tom-2.mp3")
const soundTom3 = new Audio ("sounds/tom-3.mp3")
const soundTom4 = new Audio ("sounds/tom-4.mp3")
const soundSnare = new Audio ("sounds/snare.mp3")
const soundCrash = new Audio ("sounds/crash.mp3")
const soundKick = new Audio ("sounds/kick-bass.mp3")

for (let i = 0; i < drumBtn.length; i++) {
    drumBtn[i].addEventListener("click", function() {
        let innerText = this.innerText
        makeAudio(innerText)
        btnAnimation(innerText)
    })
}

document.addEventListener("keypress", function(e) {
    makeAudio(e.key)
    btnAnimation(e.key)
})

function makeAudio(key) {
    switch (key) {
    case "w" : soundTom1.play()
    break
            
    case "a" : soundTom2.play()
    break

    case "s" : soundTom3.play()
    break

    case "d" : soundTom4.play()
    break

    case "j" : soundSnare.play()
    break

    case "k" : soundCrash.play()
    break

    case "l" : soundKick.play()
    break

    default : console.log("Hello world!")
    }
}

function btnAnimation(currentKey) {
    let activeBtn = document.querySelector(`.${currentKey}`)
    activeBtn.classList.add("pressed")
    setTimeout(function() {
        activeBtn.classList.remove("pressed")
    }, 100)
}


