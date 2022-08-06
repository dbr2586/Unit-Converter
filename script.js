let inputText = document.getElementById("input")
inputText.value = ""


let inputButton = document.getElementById("convert-button")

let lengthOutput = document.getElementById("length-output") 
let volumeOutput = document.getElementById("volume-output") 
let massOutput = document.getElementById("mass-output") 



const valueFromLocalStorage = localStorage.getItem("lastValue")

if (valueFromLocalStorage) {
    inputText.value = valueFromLocalStorage
    console.log("hello!")
    renderOutput()
}

function renderOutput(){
    lengthOutput.textContent = `${inputText.value} meters = ${(inputText.value * 3.281).toFixed(3)} feet | 
        ${inputText.value} feet = ${(inputText.value / 3.281).toFixed(3)} meters`

    volumeOutput.textContent = `${inputText.value} liters = ${(inputText.value * 0.264172).toFixed(3)} gallons |
         ${inputText.value} gallons = ${(inputText.value * 3.785411784).toFixed(3)} liters`

    massOutput.textContent = `${inputText.value} kilograms = ${(inputText.value * 2.2046226218).toFixed(3)} pounds | 
        ${inputText.value} pounds = ${(inputText.value * .45359237).toFixed(3)} kilograms`
    
    localStorage.setItem("lastValue", inputText.value)
}

inputText.addEventListener("input", function() {
    let fontSizeReferenceValue = inputText.value.length
    if (fontSizeReferenceValue > 11) { 
        inputText.type = "text"
        inputText.value = "Calm down!"
        inputButton.textContent = "😲"
        inputButton.style.fontSize = "30px"
        inputText.style.fontSize = "15px"
    } else if (fontSizeReferenceValue > 10) {
        inputText.style.fontSize = "7x"
    } else if (fontSizeReferenceValue > 6) {
        inputText.style.fontSize = "14px"
    } else if (fontSizeReferenceValue > 3) {
        inputText.style.fontSize = "28px"
    } else if (fontSizeReferenceValue > 0) {
        inputText.style.fontSize = "56px"
    } 
    if (inputText.type === "text" && inputText.value != "Calm down!") {
        inputText.type = "number"
        inputText.style.fontSize = "56px"
        inputText.value = ""
        inputButton.textContent = "Convert"
        inputButton.style.fontSize = "16px"
    }
    fontSizeReferenceValue = 0 }) 


 

inputButton.addEventListener("click", function() {
    if (inputText.value === "") {
        //do nothing
    } else if (inputButton.textContent === "😲") {
        lengthOutput.textContent = "😲😲😲😲😲😲😲😲"
        volumeOutput.textContent = "😲😲😲😲😲😲😲😲"
        massOutput.textContent =   "😲😲😲😲😲😲😲😲"

    } else {
        renderOutput()
    }})

