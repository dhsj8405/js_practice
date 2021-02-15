const SHOWING_CLASS = "showing";
const SLIDEIN_CLASS = "slideIn";
const SLIDEOUT_CLASS = "slideOut";
const slider_item = document.querySelector(".slider_item");
const firstSlide = document.querySelector(".slider_item:first-child");
const lastSlide = document.querySelector(".slider_item:last-child");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
firstSlide.classList.add(SHOWING_CLASS);


function slideInOutSystem(nextItem,nowItem){
  nowItem.classList.remove(SLIDEIN_CLASS);
  nextItem.classList.add(SLIDEIN_CLASS);
  nowItem.classList.add(SLIDEOUT_CLASS);
  const preItem = nowItem.previousElementSibling;
  if(preItem){
    preItem.classList.remove(SLIDEOUT_CLASS);
  }else{
    lastSlide.classList.remove(SLIDEOUT_CLASS);
  }
}

//
// function slideInOut_remove(a){
//   )
// }

function nextSlide(){
  const nowItem = document.querySelector(`.${SHOWING_CLASS}`);
  nowItem.classList.remove(SHOWING_CLASS);
  // nowItem.classList.remove(SLIDEIN_CLASS);
  const nextItem = nowItem.nextElementSibling; // next element sibling은 다음 첫번째 sibling을 리턴(=element) 그렇지 않은경우 null을 return
  // const previousSlide = nowItem.previousElementSibling;
  // if(previousSlide){
  //   previousSlide.classList.remove(SLIDEOUT_CLASS);
  // }else{
  //   lastSlide.classList.remove(SLIDEOUT_CLASS);
  // }
  if(nextItem){
    slideInOutSystem(nextItem,nowItem);
    nextItem.classList.add(SHOWING_CLASS);
    // nextItem.classList.add(SLIDEIN_CLASS);
    // nowItem.classList.add(SLIDEOUT_CLASS);
  }else{
    slideInOutSystem(firstSlide,lastSlide);
    firstSlide.classList.add(SHOWING_CLASS);
    // firstSlide.classList.add(SLIDEIN_CLASS);
    // lastSlide.classList.add(SLIDEOUT_CLASS);
  }
}

function previousSlide(){
  const nowItem = document.querySelector(`.${SHOWING_CLASS}`);
  nowItem.classList.remove(SHOWING_CLASS);
  const previousSlide = nowItem.previousElementSibling; // next element sibling은 다음 첫번째 sibling을 리턴(=element) 그렇지 않은경우 null을 return
  if(previousSlide){
    previousSlide.classList.add(SHOWING_CLASS);
  }else{
    lastSlide.classList.add(SHOWING_CLASS);
  }
}
function init(){
  // previousSlide();
  // nextItem();
  leftBtn.addEventListener("click",previousSlide);
  rightBtn.addEventListener("click",nextSlide);
}
init();
// setInterval(slide, 2000); //2000ms(=2초)마다 해당 function을 불러옴 : 함수반복시킴
