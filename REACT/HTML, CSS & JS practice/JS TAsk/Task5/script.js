let body = document.querySelector("body");
let button = document.createElement("button");
button.textContent = "Click to Gamble "
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
body.appendChild(button);

button.addEventListener("click", () => {
    let randomNum = Math.floor(((Math.random())*10) + 1);
    console.log(randomNum);
    if(randomNum > 7 ){
        alert("You won!");
    }
    else{
        alert("Try Again!");
    }
})