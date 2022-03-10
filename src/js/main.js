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
const button = document.querySelector(".content__link")

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


// chữ nhấp nháy

const fontElement = document.querySelector('.blue')

setInterval(function(){
    fontElement.classList.toggle('blue')
}, 1000)