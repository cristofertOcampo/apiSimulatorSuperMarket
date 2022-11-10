const products = [
  {name:"rice", price:"5$",quantity:50,image:"Images/rice.jpeg"},
  {name:"potato", price:"5$",quantity:12,image:"Images/potato.jpeg"},
  {name:"Meat", price:"5$",quantity:95,image:"Images/Meat.jpeg"},
  {name:"Milk", price:"5$",quantity:34,image:"Images/milk.jpeg"},
];

const mainContent = document.getElementById("main-container")

const createCard = (product)=>{
  const cardProduct = document.createElement("div");
  const nameProduct = document.createElement("h2");
  const priceProduct = document.createElement("p");
  const quantityProduct = document.createElement("p");
  const imageProduct = document.createElement("img");
  const btnAddToCard = document.createElement("button");


  nameProduct.textContent = product.name;
  priceProduct.textContent = product.price;
  quantityProduct.textContent = product.quantity;
  imageProduct.setAttribute("src", product.image);
  imageProduct.setAttribute("alt", product.image);
  btnAddToCard.textContent = "Add to Cart"

  cardProduct.classList.add("card");

  cardProduct.appendChild(nameProduct);
  cardProduct.appendChild(imageProduct);
  cardProduct.appendChild(priceProduct);
  cardProduct.appendChild(quantityProduct);
  cardProduct.appendChild(btnAddToCard);

  mainContent.appendChild(cardProduct);
}

function renderCards(){
  products.map((element)=>{return createCard(element)})
}

window.addEventListener("DOMContentLoaded", renderCards)