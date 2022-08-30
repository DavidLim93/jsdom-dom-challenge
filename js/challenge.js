

const counter = document.getElementById("counter");
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const love = document.getElementById('heart')
const comment = document.querySelector('.likes')
const submit = document.getElementById('submit')
const comments = document.getElementById('comment-input')
const list = document.getElementById('list')
const pause = document.getElementById('pause')

let counterRun = true



function counterTimer () {

    if (counterRun) {
        counter.innerHTML++
    }
}

let timer = setInterval(counterTimer, 1000)

document.addEventListener('DOMContentLoaded', () => {
    timer
})

plus.addEventListener('click', () => {
    counter.innerHTML++
})

minus.addEventListener('click', () => {
    counter.innerHTML--
    })

counterEle = {}

love.addEventListener('click', () => {

    if (counterEle[counter.innerHTML]){
        listElement = document.querySelector(`[data-number= "${counter.innerHTML}"]`)
        counterEle[counter.innerHTML] += 1
        listElement.innerHTML = `${counter.innerHTML} was liked ${counterEle[counter.innerHTML]} times`
        comment.append(listElement)
    }
    else {
        listElement = document.createElement('li')
        listElement.dataset.number = counter.innerHTML
        counterEle[counter.innerHTML] = 1
        listElement.innerHTML = `${counter.innerHTML} was liked ${counterEle[counter.innerHTML]} times`
        comment.append(listElement)
    }

   
})


pause.addEventListener('click', () => {
    if (counterRun) {
        counterRun = false;
        plus.disable = true;
        minus.disable = true;
        love.disable = true;
        pause.innerHTML = 'Resume'
    } else {
        counterRun = true
        plus.disable = false;
        minus.disable = false;
        love.disable = false;
    }
    const pause = document.getElementById('pause')
    let counterRun = true
})

submit.addEventListener('click', (e) => {
    e.preventDefault()
    pEle = document.createElement('p')
    pEle.innerHTML = comments.value
    list.append(pEle)
})