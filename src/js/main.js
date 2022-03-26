const bars = document.querySelector('.js-bars')
const menu = document.querySelector('.js-menu')
const xmarks = document.querySelectorAll('.js-close')
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
model.addEventListener('click', hide)

for(const xmark of xmarks){
    xmark.addEventListener('click', hide)
}

// click vào menu chuyển sang mục khác
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const image = document.querySelector(".img")

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    if(index != 0){
      image.classList.remove("active")
    }else{
      image.classList.add("active")
    }

    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// click vào button
const item1 = $(".tab-item1");
const item2 = $(".tab-item2");
const pane1 = $(".home");
const pane2 = $(".tab-pane1");
const button = document.querySelector(".button__link")

button.onclick = function(){
    item1.classList.remove("active")
    item2.classList.add("active")
    pane1.classList.remove("active")
    pane2.classList.add("active")
}

const item3 = $(".tab-item3");
const pane3 = $(".tab-pane2");
const button1 = document.querySelector(".button__link1")

button1.onclick = function(){
    item1.classList.remove("active")
    item3.classList.add("active")
    pane1.classList.remove("active")
    pane3.classList.add("active")
}


// chữ nhấp nháy
const fontElement = document.querySelectorAll('.blue')
var index = 0;

setInterval((e) => {
    fontElement.forEach((e) => {
      e.classList.remove('addblue');
    })

    fontElement[index].classList.add('addblue');
    index++;
    
    if(index == fontElement.length){
      index = 0;
    }
}, 400)