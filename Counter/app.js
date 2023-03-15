const numValue = document.getElementById("value")
const stepElem = document.getElementById("step")

function increaseByOne(){
    numValue.textContent = parseInt(numValue.textContent)+parseInt(stepElem.value)
    valueCheck()
}
function resetCounter(){
    numValue.textContent = 0
    valueCheck()
}
function decreaseByOne(){
    numValue.textContent = parseInt(numValue.textContent)-parseInt(stepElem.value)
    valueCheck()
}
document.getElementById("decr").addEventListener("click", decreaseByOne)
document.getElementById("rst").addEventListener("click", resetCounter)
document.getElementById("incr").addEventListener("click", increaseByOne)

function valueCheck(){
    if (parseInt(document.getElementById("value").textContent) === 0){
        numValue.style.color = "#102A42"
    } else if (parseInt(document.getElementById("value").textContent) > 0 ){
        numValue.style.color = "green"
    } else {
        numValue.style.color = "red"
    }
}