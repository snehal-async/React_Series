
const products = [
  "Dairy Milk",
  "KitKat",
  "5 Star",
  "Perk",
  "Eclairs",
  "Dark",
  "Crispello",
  "Kaccha Mango",
  "Imali"
];

const searchBox = document.getElementById("searchBox");
const list = document.getElementById("productList");
const msg = document.getElementById("msg");


function showProducts(arr) {
  list.innerHTML = "";

  if(arr.length === 0){
    msg.textContent = "No products found ❌";
    return;
  }

  msg.textContent = "";

  arr.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product;
    list.appendChild(li);
  });
}


showProducts(products);


searchBox.addEventListener("input", function () {
  const userText = searchBox.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.toLowerCase().startsWith(userText)
  );

  showProducts(filteredProducts);
});