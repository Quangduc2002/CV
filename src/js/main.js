const bars = document.querySelector('.js-bars')
const menu = document.querySelector('.js-menu')
const xmark = document.querySelector('.js-close')
const model = document.querySelector('.js-model')


function show(){
    menu.classList.add('active')
    bars.classList.add('active')
    model.classList.add('active')
}

function hide(){
    menu.classList.remove('active')
    bars.classList.remove('active')
    model.classList.remove('active')
}

bars.addEventListener('click', show)
xmark.addEventListener('click', hide)
model.addEventListener('click', hide)
