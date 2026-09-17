function selector(id){
    return document.getElementById(id);
}
//clock hands
let secondHand=selector("secHand")
let minHand=selector("minHand")
let hourHand=selector("hourHand")

//clock digits
let hourText=selector("hours")
let minuteText=selector("minutes")
let secondText=selector("seconds")

function updateTime(){

    let time=new Date();

    let currentHour =time.getHours();
    let currentMin =time.getMinutes();
    let currentSec =time.getSeconds();

    hourText.textContent='${currentHour}'.padStart(2,"0");
    minuteText.textContent='${currentMin}'.padStart(2,"0");
    secondText.textContent='${currentSec}'.padStart(2,"0");

    let hdeg=(360/12)*currentHour-90;
    let mdeg=(360/60)*currentMin-90;
    let sdeg=(360/60)*currentSec-90;

    
    hourHand.style.transform='translateY(-50%) rotate(${hdeg}deg)';
    secondHand.style.transform='translateY(-50%) rotate(${sdeg}deg)';
    minHand.style.transform='translateY(-50%) rotate(${mdeg}deg)';

}

updateTime();

setInterval(updateTime,3000);




