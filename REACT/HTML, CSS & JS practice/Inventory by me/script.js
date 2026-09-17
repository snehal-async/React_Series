let productsData = [
  {
    productname: "Cheese Burst Pizza",
    category: "Junk Food",
    price: 199,
    imageurls: ["https://tse1.mm.bing.net/th/id/OIP.7jQT0JH4C3FkDT2ARaB7LAHaFj?pid=Api&P=0&h=180"]
  },
  {
    productname: "Veg Burger",
    category: "Junk Food",
    price: 99,
    imageurls: ["https://tse4.mm.bing.net/th/id/OIP.s07UsAo90pfNbIUBM-OTbAHaHa?pid=Api&P=0&h=180"]
  },
  {
    productname: "French Fries",
    category: "Junk Food",
    price: 80,
    imageurls: ["https://tse1.mm.bing.net/th/id/OIP.HOrYpSqerIfTF9py1APdaQHaJU?pid=Api&P=0&h=180"]
  },
  {
    productname: "Fried Chicken Bucket",
    category: "Junk Food",
    price: 150,
    imageurls: ["https://static.vecteezy.com/system/resources/previews/032/159/526/non_2x/food-bucket-with-chicken-wings-isolated-free-photo.jpeg"]
  },
  {
    productname: "Hot Dog",
    category: "Junk Food",
    price: 79,
    imageurls: ["https://tse1.mm.bing.net/th/id/OIP.uObt_nqHQCtzPv_S07fa2gHaFb?pid=Api&P=0&h=180"]
  },
  {
    productname: "Chocolate Donut",
    category: "Junk Food",
    price: 50,
    imageurls: ["https://tse3.mm.bing.net/th/id/OIP.KwazfxXvI4IfItl_pE-s3wHaHa?pid=Api&P=0&h=180"]
  },
  {
    productname: "Ice Cream Sundae",
    category: "Junk Food",
    price: 90,
    imageurls: ["https://tse1.mm.bing.net/th/id/OIP.dbyoHU3Q-BP-bmXGFlpvEAHaFj?pid=Api&P=0&h=180"]
  },
  {
    productname: "Nachos with Dip",
    category: "Junk Food",
    price: 99,
    imageurls: ["https://tse2.mm.bing.net/th/id/OIP.E-blV8hmp6fAk9p3kCyGOAHaHa?pid=Api&P=0&h=180"]
  },
  {
    productname: "Chocolate Milkshake",
    category: "Junk Food",
    price: 80,
    imageurls: ["https://breadsandsweets.com/wp-content/uploads/2022/07/chocolate-milkshake-sq-1-of-1.jpg"]
  },
  {
    productname: "Cola Drink",
    category: "Junk Food",
    price: 50,
    imageurls: ["https://www.mashed.com/img/gallery/coca-colas-next-limited-edition-flavor-reportedly-tastes-like-ros/l-intro-1676334731.jpg"]
  },
  {
    productname: "Potato Chips",
    category: "Junk Food",
    price: 40,
    imageurls: ["https://www.beyondthechickencoop.com/wp-content/uploads/2020/07/Homemade-Potato-Chips-1-of-1.jpg"]
  },
  {
    productname: "Chocolate Bar",
    category: "Junk Food",
    price: 45,
    imageurls: ["https://www.foodandwine.com/thmb/1oyLEFItwaglqP7jSbcPHkcpwvo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chocolate-Bar-Taste-Test-FT-BLOG0223-91b738d266bb4e339c8dabc77d76c633.jpg"]
  },
  {
    productname: "Cup Noodles",
    category: "Junk Food",
    price: 79,
    imageurls: ["https://tse2.mm.bing.net/th/id/OIP.Ulf6q0FYR_4M_pV4x-WoSAHaEJ?pid=Api&P=0&h=180"]
  },
  {
    productname: "Taco Wrap",
    category: "Junk Food",
    price: 69,
    imageurls: ["https://easyfoodguide.com/wp-content/uploads/2025/04/taco-wrap2.jpg"]
  },
  {
    productname: "Cheese Sandwich",
    category: "Junk Food",
    price: 79,
    imageurls: ["https://tse1.mm.bing.net/th/id/OIP.w0Cvh-oKcdRx4TccwAubFAHaE8?pid=Api&P=0&h=180"]
  },
  {
    productname: "Popcorn Tub",
    category: "Junk Food",
    price: 99,
    imageurls: ["https://img.freepik.com/premium-photo/front-view-popcorn-wooden-bowl_1088575-476.jpg?w=2000"]
  },
  {
    productname: "Brownie Slice",
    category: "Junk Food",
    price: 59,
    imageurls: ["https://tse4.mm.bing.net/th/id/OIP.6xLFg2gsPbbRsZXvD8hIzAHaE5?pid=Api&P=0&h=180"]
  },
  {
    productname: "Loaded Cheese Fries",
    category: "Junk Food",
    price: 120,
    imageurls: ["https://tse4.mm.bing.net/th/id/OIP.MFa-2MFFswQkOQlLO-h6hQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"]
  },
  {
    productname: "Chicken Nuggets",
    category: "Junk Food",
    price: 99,
    imageurls: ["https://tse3.mm.bing.net/th/id/OIP.I2HOuG2ZlTWyk_klSEeYtAHaHa?pid=Api&P=0&h=180"]
  },
  {
    productname: "Strawberry Cupcake",
    category: "Junk Food",
    price: 99,
    imageurls: ["https://tse2.mm.bing.net/th/id/OIP.woaI4SiKLYEK9tQ_oELmkgHaLH?pid=Api&P=0&h=180"]
  }
];

let section=document.querySelector("section");
let allProducts=""



productsData.forEach(function(elem,index){
  allProducts+= `<div id="product">
          <div id="img">
            <img src= ${elem.imageurls[0]} alt=""/>
          </div>

          <div class="content">
            <h3>Name: <span>${elem.productname}</span></h3>
            <h3>Category: ${elem.category}</h3>
            <h3>Price: <span>${elem.price}</span></h3>
          </div>

          <div id="btns">
            <button id="remove">Remove</button>
            <button id="${index}">Add to Cart</button>
          </div>
        </div>`;
});

section.innerHTML=allProducts;


let cartSc = document.querySelector(".cartSc");

let cartsData = [];

function renderCartsUi() {
  let cartsUi = "";

  cartsData.forEach(function (elem, index) {
    cartsUi += `<div class="product-card">
            <div class="img">
              <img
                src="${elem.imageurls[0]}"
                alt=""
              />
            </div>
  
            <div class="content">
              <h3>Name: <span>${elem.productname}</span></h3>
              <h3>Category: ${elem.category}</h3>
              <h3>Price:m <span>$${elem.price}</span></h3>
            </div>
<div class="btns">
            <button onClick="deleteFromCart(${index})">Remove</button>
          </div>

          </div>`;
  });

  cartSc.innerHTML = cartsUi;
}


//---------------------------//
let homeBtn = document.querySelector("#home");
let cartBtn = document.querySelector("#cart");

section.addEventListener("click", function (dets) {
  if (!dets.target.id) {
    return;
  }

  let clickedCard = productsData.find(function (elem, index) {
    return index == dets.target.id;
  });

  console.log(clickedCard);

  cartsData.push(clickedCard);
  renderCartsUi();
  alert("item added to cart");
});




cartBtn.addEventListener("click", function () {
    cartSc.style.display = "flex"; 
});

homeBtn.addEventListener("click", function () {
    cartSc.style.display = "none"; 
});




function deleteFromCart(id) {
  let result = cartsData.filter(function(elem, index){
    return index !== id
  })

  cartsData = result
  renderCartsUi()

}