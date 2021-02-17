const openButton1 = document.getElementById("open1");
const openButton2 = document.getElementById("open2");
const openButton3 = document.getElementById("open3");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const modalText = document.querySelector(".modal_content h1");
const closeBtn = modal.querySelector("#quit");
const openModal = () => {
  modal.classList.remove("hidden");
};
const openModal1 = () => {
  openModal();
  modalText.innerHTML = "오늘 공부는 계획대로 잘 수행하였나요?";
};
const openModal2 = () => {
  openModal();
  modalText.innerHTML = "이번 주 공부는 계획대로 잘 수행하였나요?";
};
const openModal3 = () => {
  openModal();
  modalText.innerHTML = "개발 공부는 잘하고 있나요?";
};
const closeModal = () => {
  modal.classList.add("hidden");
};
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
openButton1.addEventListener("click", openModal1);
openButton2.addEventListener("click", openModal2);
openButton3.addEventListener("click", openModal3);
