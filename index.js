console.log("Hello World")

let count = 0

const counter = document.querySelector("#counter")

const increase = () => {
    count += 1

    counter.innerText = count
}

const decrease = () => {
    count -= 1
    
    counter.innerText = count
}

const reset = () => {
    count = 0
    
    counter.innerHTML = `<mark>${count}</mark>` //if i code it right i wil see higlight once i press reset
}


const increaseBtn = document.querySelector("#increaseBtn")
const resetBtn = document.querySelector("#resetBtn")
const decreaseBtn = document.querySelector("#decreaseBtn")


increaseBtn.addEventListener("click", increase)
resetBtn.addEventListener("click", reset)
decreaseBtn.addEventListener("click", decrease)

const selectTheme = (theme) => {
    
    document.querySelector("body").className = theme
    document.querySelector("main").className = theme

// queryselector all <buttom></buttom> elements
    const buttons = document.querySelectorAll("button")
    //set the class name for each buttom elemnt = theme
    for (let button of buttons) {
        button.className = theme
    }
}

const facebookBtn = document.querySelector("#facebook")
const devmountainBtn = document.querySelector("#devmountain")
const twitterBtn = document.querySelector("#twitter")
const defaultBtn = document.querySelector("#default")


facebookBtn.addEventListener("click", () => selectTheme("facebook"))
devmountainBtn.addEventListener("click", () => selectTheme("devmountain"))
twitterBtn.addEventListener("click", () => selectTheme("twitter"))
defaultBtn.addEventListener("click", () => selectTheme("default"))
