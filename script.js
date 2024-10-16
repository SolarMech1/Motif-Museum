//variables
const radioSlideShow = document.getElementById('radioSlideShow');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
var x = 0;

//functions for slide show
function nextImg () {
    
    if (x == 3) {
        x = 0
        circle1.style.backgroundColor="white";
        circle2.style.backgroundColor="rgb(41, 41, 41)";
        circle3.style.backgroundColor="rgb(41, 41, 41)";
      }

    x += 1;
    //alert(x)      

    changeImg ()
}

function backImg () {
  
    if (x == 0) {
      x = 3
      circle1.style.backgroundColor="white";
      circle2.style.backgroundColor="rgb(41, 41, 41)";
      circle3.style.backgroundColor="rgb(41, 41, 41)";
    }
    
    x -= 1;
    //alert(x)

    changeImg ()
}

function changeImg () {
    if (x == 1) {
        radioSlideShow.style.backgroundImage="url('Images/Radio Slide Show/AM Radio.png')";
        circle1.style.backgroundColor="rgb(41, 41, 41)";
        circle2.style.backgroundColor="white";
        circle3.style.backgroundColor="rgb(41, 41, 41)";
    }
    if (x == 2) {
        radioSlideShow.style.backgroundImage="url('Images/Radio Slide Show/FM Radio.jpg')";
        circle1.style.backgroundColor="rgb(41, 41, 41)";
        circle2.style.backgroundColor="rgb(41, 41, 41)";
        circle3.style.backgroundColor="white";
    }
    if (x == 3) {
        radioSlideShow.style.backgroundImage="url('Images/Radio Slide Show/Guglielmo Marconi.jpg')";
        circle1.style.backgroundColor="white";
        circle2.style.backgroundColor="rgb(41, 41, 41)";
        circle3.style.backgroundColor="rgb(41, 41, 41)";
    }
    if (x == 0) {
        radioSlideShow.style.backgroundImage="url('Images/Radio Slide Show/Guglielmo Marconi.jpg')";
        circle1.style.backgroundColor="white";
        circle2.style.backgroundColor="rgb(41, 41, 41)";
        circle3.style.backgroundColor="rgb(41, 41, 41)";
    }
}


