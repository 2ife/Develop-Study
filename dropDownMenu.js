const wholeDropDownPart = document.querySelector(".allCategories");
const triggerDropDown = document.querySelector(".classifyCategory");
const dropDownPart = document.querySelector(".sectionalCategories");
const showMenu = () => {
  dropDownPart.classList.add("show");
};
const hideMenu = () => {
  dropDownPart.classList.remove("show");
};
triggerDropDown.addEventListener("mouseover", showMenu);
wholeDropDownPart.addEventListener("mouseleave", hideMenu);
