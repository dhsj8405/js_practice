const rBtn = document.querySelector(".rightBtn");
const lBtn = document.querySelector(".leftBtn");
const slider = document.querySelector(".slider");
const sliderItem = document.querySelectorAll(".sliderItem");
const container = document.querySelector(".container");
const item_totalIndex = sliderItem.length;
const item_lastIndex = item_totalIndex - 1;
var itemWidth = container.clientWidth;
var itemIndex = 0;
slider.style.width = itemWidth * item_totalIndex + 'px';

function carouselSlide(n){
  if (n === 1 && itemIndex === item_lastIndex){
    itemIndex = 0;
  }else if ( n === -1 && itemIndex === 0){
    itemIndex = item_lastIndex;
  }else{
    itemIndex = itemIndex + n ;
  }
  slider.style.left = - (itemWidth * itemIndex) + 'px';
}

function init(){
  rBtn.addEventListener('click',function(){
    carouselSlide(1)
  });
  lBtn.addEventListener('click',function(){
    carouselSlide(-1)
  });
}

init();
