const lopezBtn = document.getElementById('lopezBtn');
const gambitBtn = document.getElementById('gambitBtn');
const londonBtn = document.getElementById('londonBtn');
const formL = document.getElementById('formL');
const formQ = document.getElementById('formQ');
const formR = document.getElementById('formR');

londonBtn.addEventListener("click", function(e){
    e.preventDefault();

    formL.style.display = formL.style.display === "none" ? "block": "none";
    formQ.style.display = "none";
    formR.style.display = "none";
});

gambitBtn.addEventListener("click", function(e){
    e.preventDefault();

    formQ.style.display = formQ.style.display === "none" ? "block": "none";
    formL.style.display = "none";
    formR.style.display = "none";
});
    
lopezBtn.addEventListener("click", function(e){
    e.preventDefault();

    formR.style.display = formR.style.display === "none" ? "block": "none";
    formL.style.display = "none";
    formQ.style.display = "none";
});



const kannBtn = document.getElementById('kannBtn');
const knightsBtn = document.getElementById('knightsBtn');
const indianBtn = document.getElementById('indianBtn');
const formI = document.getElementById('formI');
const formC = document.getElementById('formC');
const formK = document.getElementById('formK');

kannBtn.addEventListener("click", function(e){
    e.preventDefault();

    formC.style.display = formC.style.display === "none" ? "block": "none";
    formK.style.display = "none";
    formI.style.display = "none";
});

knightsBtn.addEventListener("click", function(e){
    e.preventDefault();

    formK.style.display = formK.style.display === "none" ? "block": "none";
    formC.style.display = "none";
    formI.style.display = "none";
});

indianBtn.addEventListener("click", function(e){
    e.preventDefault();

    formI.style.display = formI.style.display === "none" ? "block": "none";
    formC.style.display = "none";
    formK.style.display = "none";
});


const BtnW = document.getElementById('openingsWhite');
const BtnB = document.getElementById('openingsBlack');
const formW = document.getElementById('whiteOp');
const formB = document.getElementById('blackOp');

BtnW.addEventListener("click", function(e){
    e.preventDefault();
    
    formW.style.display = formW.style.display === "none" ? "block": "none";
    formB.style.display = "none";
    formC.style.display = "none";
    formK.style.display = "none";
    formI.style.display = "none";
    formQ.style.display = "none";
    formR.style.display = "none";
    formL.style.display = "none";
});

BtnB.addEventListener("click", function(e){
    e.preventDefault();
    
    formB.style.display = formB.style.display === "none" ? "block": "none";
    formW.style.display = "none";
    formC.style.display = "none";
    formK.style.display = "none";
    formI.style.display = "none";
    formQ.style.display = "none";
    formR.style.display = "none";
    formL.style.display = "none";

    
    
});

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

    
    
    

