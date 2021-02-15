const modalBtn = document.querySelector(".modalBtn");
const modalWindow = document.querySelector(".modalWindow");
const modalCloseBtn = modalWindow.querySelector(".modalCloseBtn");
const modaloverlay = modalWindow.querySelector(".modaloverlay");

function openModal(){
  modalWindow.classList.remove("modalHidden");
}
function closeModal(){
  modalWindow.classList.add("modalHidden");
}

function init(){
  modaloverlay.addEventListener("click",closeModal);
  modalCloseBtn.addEventListener("click",closeModal);
  modalBtn.addEventListener("click", openModal);

  // wrap.addEventListener("click",modalCancel);
}

init();
