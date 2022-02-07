let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`;

let container = document.getElementById("container");

async function getProducts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    renderProducts(data);
  } catch (error) {
    console.log("error: ", error);
  }
}
getProducts();
//for Cart Items

let cart = localStorage.getItem("cart");
if (!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  refreshCount(cart); //defined
} else {
  cart = JSON.parse(cart);
  refreshCount(cart);
}
function refreshCount(cart) {
  let cartCount = document.getElementById("count");
  cartCount.textContent = "Items in Cart : " + cart.length;
}

// //For the products to be visibe into Console.
function fetchProducts(url) {
  return fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log("res: ", res);
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
}

//render Products
function renderProducts(data) {
  //container.innerHTML = "";

  data.meals.forEach(function (el) {
    //console.log("el: ", el);
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.strMealThumb;

    let name = document.createElement("h4");
    name.innerText = `${el.strMeal}`;

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let price = document.createElement("h3");
    price.textContent = `$ : ` + getRandomInt(500);

    let addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.onclick = function (event) {
      addCart(el);
    };
    div.append(image, name, price, addToCartBtn);
    container.append(div);
  });

  function addCart(el) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(el);

    localStorage.setItem("cart", JSON.stringify(cart));
    refreshCount(cart);
  }
}
