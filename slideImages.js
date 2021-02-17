var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  for (i = 0; i < document.getElementsByClassName("slides").length; i++) {
    document.getElementsByClassName("slides")[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > document.getElementsByClassName("slides").length) {
    slideIndex = 1;
  }
  document.getElementsByClassName("slides")[slideIndex - 1].style.display =
    "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
