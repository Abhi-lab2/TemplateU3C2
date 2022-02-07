function addAddress() {
  let address = document.getElementById("address");
  console.log("address: ", address);
  if (address.length <= 10) {
    alert("Enter Proper address with more than 10 characteristics");
  } else {
    alert("Order Booked Successfully");
  }
}
