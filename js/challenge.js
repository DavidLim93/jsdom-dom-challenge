// Dom Elements

const timerH1 = document.querySelector("h1#counter");
const buttonContainer = document.querySelector("button-container")
const likesUl = document.querySelector("ul.likes")
const commentForm=document.querySelector("#comment-form")
const commentList=document.querySelector("#list")

// Application state
let currentNumber = 0;
let counterRunning = true
let likedNumbers = {}

commentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const p=document.createElement("p");
    const input=document.querySelectorAll("#comment-input");
    
    p.textContent=input.values;

    commentList.append(p);

    event.target.reset();
})

buttonContainer.addEventListener("click", event => {
    if (event.target.id === "plus") {
        changeCounter(1)
    } else if (event.target.id === "minus") {
        changeCounter(-1)
    } else if (event.target.id === "pause") {
        togglePaused ()
    } else if (event.target.id === "heart") {
        updateLikes()
    }
})

function updateLikes () {
    if (likedNumbers[currentNumber]) {
        const li = document.querySelectorAll(`[data-number="${currentNumber}"]`)
        likedNumbers[likedNumbers] += 1
        li.textContent = `The number ${currentNumber} has been liked ${likedNumbers[likedNumbers]} time`
    } else {
        likedNumbers[likedNumbers] = 1
        const li = document.createElement("li")
        li.dataset.number=currentNumber
        li.textContent = `The number ${currentNumber} has been liked 1 time`
         likesUl.append(li)
    }
  
}

function togglePaused () {
    counterRunning = !counterRunning
    document.querySelectorAll("button").forEach(button => {
        if (button.id !== "pause") {
            button.disabled=!counterRunning
        } else {
            if (counterRunning) {
                button.textContent = "pause" 
            } else {
                button.textContent = "resume" 
            }
        }
    })
}

function changeCounter(amount) {
    currentNumber = currentNumber + amount;
    timerH1.textContent = currentNumber
}

setInterval (()=> {
    if (counterRunning) {
        changeCounter(1)
    }
    } , 1000);
