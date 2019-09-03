const $searchIcons = document.querySelectorAll(".search-icon");
const $menu = document.querySelector(".menu-wrapper");
const $menuButton = $menu.querySelector(".-menu");

$searchIcons.forEach($searchIcon => {
  $searchIcon.addEventListener("click", () => {
    document.querySelector(".search-wrapper").classList.toggle("-active");
  });
});

$menuButton.addEventListener("click", () => {
  $menu.classList.toggle("-active");
});
