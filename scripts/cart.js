let cart = localStorage.getItem("cart");
if (!cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
} else {
  cart = JSON.parse(cart);
}
let total = cart.reduce(function (acc, cv) {
  return acc + cv.price;
}, 0);

let container = document.getElementById("container");

let table = document.createElement("table");
let thead = document.createElement("thead");
let theadRow = document.createElement("tr");
let th1 = document.createElement("th");
th1.textContent = "Image";
let th2 = document.createElement("th");
th2.textContent = "Dish";
let th3 = document.createElement("th");
th3.textContent = "Price";

theadRow.append(th1, th2, th3);
thead.append(theadRow);
let tbody = document.createElement("tbody");

cart.forEach(function (el) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  let el_img = document.createElement("img");
  el_img.src = el.strMealThumb;
  td1.append(el_img);

  let td2 = document.createElement("td");
  td2.textContent = el.strMeal;

  let td3 = document.createElement("td");
  td3.textContent = el.price;

  tr.append(td1, td2, td3);
  tbody.append(tr);
});
table.append(thead, tbody);
container.append(table);

//price display

function totalAmt(total) {
  let totalAmt = document.getElementById("total");
  totalAmt.textContent = "Total :" + total;
}
totalAmt(total);
