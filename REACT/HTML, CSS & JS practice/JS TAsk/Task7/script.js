

let textCounter = document.querySelector("input");
let countDisplay = document.createElement("p");
textCounter.parentNode.insertBefore(countDisplay, textCounter.nextSibling);

textCounter.addEventListener("input", () => {
    let count = textCounter.value.length;
    countDisplay.textContent = count;
    console.log(count);
    if (count > 100){
        textCounter.style.borderColor = "red";
        countDisplay.style.color = "red";
    }
        else{   
        textCounter.style.borderColor = "";
        countDisplay.style.color = "";
    }
})