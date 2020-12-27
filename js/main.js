// VARIABLES
let pageOne = document.querySelector(".sec-1")
let pageTwo = document.querySelector(".sec-2")
let pageThree = document.querySelector(".sec-3")
let spinner1 = document.querySelector(".spin-1")
let spinner2 = document.querySelector(".spin-2")
let result1 = document.querySelector(".display-1 p")
let result2 = document.querySelector(".display-2 p")
let dareDisplay = document.querySelector(".sec-3 p")

// OBJECTS @ ARRAYS
let setOne=['Blow','Rub','Kiss','Suck','Touch','Lick','Eat', 'Ride','Stroke']
let setTwo=['Finger\'s','Thighs','Anywhere','Lips','Chest','Neck','Pussy','Dick','Ass']

// OBJECTS


// FUNCTIONS
//main play button
function playButton(e){
    pageOne.style.display="none"
    pageTwo.style.display="flex"
    pageThree.style.display="none"

}

//play again button
function playAgainButton(e){
    pageOne.style.display="none"
    pageTwo.style.display="flex"
    pageThree.style.display="none"
    result1.innerText = "Do What??"
    result2.innerText = "To what??"

    console.log("codey")
}

//get random number
function pickRandom(){ 
Math.floor(Math.random()*6)
}



//first spin button
function spinOne(e){
    result1.innerText = setOne[Math.floor(Math.random()*setOne.length)]
}

//second spin button
function spinTwo(e){
    result2.innerText = setTwo[Math.floor(Math.random()*setTwo.length)]
    pageTwo.style.display="none"
    pageThree.style.display="flex"
    dareDisplay.innerHTML = `${result1.innerText} <br> ${result2.innerText}`
}
