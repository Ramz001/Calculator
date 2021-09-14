const output = document.querySelector("#output")
//Hard coding
const buttonOne = document.querySelector("#one")
const buttonTwo = document.querySelector("#two")
const buttonThree = document.querySelector("#three")
const buttonFour = document.querySelector("#four")
const buttonFive = document.querySelector("#five")
const buttonSix = document.querySelector("#six")
const buttonSeven = document.querySelector("#seven")
const buttonEight = document.querySelector("#eight")
const buttonNine = document.querySelector("#nine")
const buttonZero = document.querySelector("#zero")

const resetButton = document.querySelector("#reset")
//Variables


buttonZero.addEventListener("click",function() {
    output.value += 0
})


buttonOne.addEventListener("click", function() {
    output.value += 1
})

buttonTwo.addEventListener("click", function() {
    output.value += 2
})

buttonThree.addEventListener("click", function() {
    output.value += 3
})

buttonFour.addEventListener("click", function() {
    output.value += 4
})

buttonFive.addEventListener("click", function() {
    output.value += 5
})

buttonSix.addEventListener("click", function() {
    output.value += 6
})

buttonSeven.addEventListener("click", function() {
    output.value += 7
})

buttonEight.addEventListener("click", function() {
    output.value += 8
})

buttonNine.addEventListener("click", function() {
    output.value += 9
})

resetButton.addEventListener("click", function(){
    output.value = null
})














