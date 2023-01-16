const addProduct = document.getElementById("add-product");
const allProductDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productTextInput = document.getElementById("product-text");
const products = JSON.parse(localStorage.getItem("lsproducts")) || [];

// add products
const addProducts = (nameValue, imageValue, priceValue, textValue) => {
  products.push({
    image: imageValue,
    price: priceValue,
    name: nameValue,
    text: textValue,
  });
  localStorage.setItem("lsproducts", JSON.stringify(products));
};

// Create element
const createElement = (nameValue, imageValue, priceValue, textValue) => {
  //   create col
  const productCol = document.createElement("div");
  productCol.classList.add("col-lg-3");

  //  create product div
  const productDiv = document.createElement("div");
  productDiv.classList.add("single-product");

  //   create image
  const productImage = document.createElement("img");
  productImage.setAttribute("src", imageValue);

  //   create price
  const productPrice = document.createElement("h5");
  productPrice.innerText = priceValue;

  //   create name
  const productName = document.createElement("h3");
  productName.innerText = nameValue;

  //   create text
  const productText = document.createElement("p");
  productText.innerText = textValue;

  // create single product div
  productDiv.append(productImage, productPrice, productName, productText);

  // create col with div
  productCol.appendChild(productDiv);

  //push product to all product
  allProductDiv.appendChild(productCol);
};

// Main Function

addProduct.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameValue = productNameInput.value;
  const imageValue = productImageInput.value;
  const priceValue = productPriceInput.value;
  const textValue = productTextInput.value;

  //   (1)Task one
  createElement(nameValue, imageValue, priceValue, textValue);

  //(2) Task two
  addProducts(nameValue, imageValue, priceValue, textValue);
});

// Show Product from local storage
//(3) Task three
products.forEach((product) => {
  createElement(
    product["name"],
    product["image"],
    product["price"],
    product["text"]
  );
});
