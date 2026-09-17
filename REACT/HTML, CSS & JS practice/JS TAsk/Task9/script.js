const addBtn = document.getElementById("addCard");
const container = document.getElementById("cardContainer");

addBtn.addEventListener("click", function () {

  const name = document.getElementById("username").value;
  const image = document.getElementById("imageUrl").value;

  if(name === "" || image === ""){
    alert("Please enter name and image URL");
    return;
  }

  
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = image;


  const title = document.createElement("h3");
  title.textContent = name;


  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");


  deleteBtn.addEventListener("click", function () {
    card.remove();
  });

 
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(deleteBtn);


  container.appendChild(card);

  
  document.getElementById("username").value = "";
  document.getElementById("imageUrl").value = "";
});