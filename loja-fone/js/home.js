const $btnAdd = document.querySelector(".-secondary");

$btnAdd.addEventListener("click", handleClick);

function handleClick() {
  console.log("item adicionado");

  const $carrinho = document.querySelector(".-last");

  $carrinho.innerHTML = "ADICIONADO!";
}
