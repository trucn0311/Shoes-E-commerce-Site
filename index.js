let cartIcon = document.querySelector(".cart-icon");
let profileIcon = document.querySelector(".avatar-icon");
let cart = document.querySelector(".cart");
let cartEmpty = document.querySelector(".empty");
let profile = document.querySelector(".profile");
let cartQuantity = document.querySelector(".cart-quantity");
let quantityBadge = document.querySelector(".quantity-badge");
let addItem = document.querySelector(".add-item");
let theInput = document.querySelector(".input");
let total = document.querySelector(".total");
cartIcon.addEventListener("click", showCart);
profileIcon.addEventListener("click", showProfile);

let totalCost = 0;

function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  totalCost = 125 * value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 0) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    totalCost = 125 * value;
  }
}

function showCart() {
  if (cart.style.display === "block") {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
    profile.style.display = "none";
  }
}
function showProfile() {
  if (profile.style.display === "block") {
    profile.style.display = "none";
  } else {
    profile.style.display = "block";
    cart.style.display = "none";
  }
}

function addToCart() {
  if (theInput.value <= 0) {
    addItem.style.display = "none";
    cartEmpty.style.display = "block";
  } else {
    addItem.style.display = "block";
    cartEmpty.style.display = "none";
    cartQuantity.textContent = theInput.value;
    quantityBadge.textContent = theInput.value;
    total.textContent = "$" + totalCost + ".00";
  }
}
function deleteItem() {
  addItem.style.display = "none";
  cart.style.display = "none";
  cartEmpty.style.display = "block";
  quantityBadge.textContent = 0;
}
