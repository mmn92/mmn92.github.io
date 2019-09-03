const $heart = document.querySelector(".hearts");
const $star = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);

$star.forEach(function(star) {
  star.addEventListener("click", handleClickStar);
});

function handleClick() {
  $heart.classList.toggle("-active");
}

function handleClickStar() {
  this.classList.add("-full");
  clearBefore(this);
  clearAfter(this);
}

function clearBefore(current) {
  while (current.previousElementSibling) {
    current = current.previousElementSibling;
    current.classList.add("-full");
  }
}

function clearAfter(current) {
  while (current.nextElementSibling) {
    current.nextElementSibling.classList.remove("-full");
    current = current.nextElementSibling;
  }
}
