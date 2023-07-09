let screen = document.querySelector(`.screen`)
let buttons = document.querySelectorAll(`.btn`)
let clear = document.querySelector(`.btn-clear`)
let equal = document.querySelector(`.btn-eqyal`)

buttons.forEach(function(button){
    button.addEventListener(`click`, function(e){
        let value = e.target.dataset.num;
        screen.value += value
    })
})

equal.addEventListener(`click`, function(e){
    if(screen.value === ``){
        screen.value = "Please yozing..."
    } else{
        let qoshuv = eval(screen.value)
        screen.value = qoshuv
    }
})

clear.addEventListener(`click`, function(e){
    screen.value = ""
})