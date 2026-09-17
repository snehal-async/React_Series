var body=document.body
var audio1=document.getElementById("1")
var audio2=document.getElementById("2")
var audio3=document.getElementById("3")
var audio4=document.getElementById("4")
var audio5=document.getElementById("5")
var audio6=document.getElementById("6")
var audio7=document.getElementById("7")
var audio8=document.getElementById("8")


var audioC=document.getElementById("C")
var audioD=document.getElementById("D")
var audioF=document.getElementById("F")
var audioT=document.getElementById("T")
var audioA=document.getElementById("A")





body.addEventListener('keydown',function(dets){
    if(dets.code=='Digit1'){
        
        audio1.play()
    }
    else if(dets.code=='Digit2'){
        audio2.play()
    }
    else if(dets.code=='Digit3'){
        audio3.play()
    }
    else if(dets.code=='Digit4'){
        audio4.play()
    }
    else if(dets.code=='Digit5'){
        audio5.play()
    }
    else if(dets.code=='Digit6'){
        audio6.play()
    }
    else if(dets.code=='Digit7'){
        audio7.play()
    }
    else if(dets.code=='Digit8'){
        audio8.play()
    }


    else if(dets.code=='KeyC'){
        audioC.play()
    }
    else if(dets.code=='KeyD'){
        audioD.play()
    }
    else if(dets.code=='KeyF'){
        audioF.play()
    }
    else if(dets.code=='KeyT'){
        audioT.play()
    }
    else if(dets.code=='KeyA'){
        audioA.play()
    }

})