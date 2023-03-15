function myShuffler(){
    let inputElement = document.getElementById("text")
    let textInput = inputElement.value.split("")
    // Array.from(inputElement.value)
    // [...inputElement.value]
    let shuffledText = []

    while(textInput.length > 0) {
        let charIndex = Math.floor(Math.random() * textInput.length)
        shuffledText.push(textInput[charIndex])
        textInput.splice(charIndex, 1)
    }
    inputElement.value = shuffledText.join("")
}


