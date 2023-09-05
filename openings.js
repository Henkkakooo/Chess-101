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
    window.scrollTo(0, document.body.scrollHeight);
});

gambitBtn.addEventListener("click", function(e){
    e.preventDefault();

    formQ.style.display = formQ.style.display === "none" ? "block": "none";
    formL.style.display = "none";
    formR.style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);
});
    
lopezBtn.addEventListener("click", function(e){
    e.preventDefault();

    formR.style.display = formR.style.display === "none" ? "block": "none";
    formL.style.display = "none";
    formQ.style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);
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
    window.scrollTo(0, document.body.scrollHeight);
});

knightsBtn.addEventListener("click", function(e){
    e.preventDefault();

    formK.style.display = formK.style.display === "none" ? "block": "none";
    formC.style.display = "none";
    formI.style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);
});

indianBtn.addEventListener("click", function(e){
    e.preventDefault();

    formI.style.display = formI.style.display === "none" ? "block": "none";
    formC.style.display = "none";
    formK.style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);
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
    window.scrollTo(0, document.body.scrollHeight);
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
    window.scrollTo(0, document.body.scrollHeight);

    
    
});

let slideIndex1 = 0;
showSlide(slideIndex1);


function changeSlide(n) {
    showSlide(slideIndex1 += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slideR");
    if (n >= slides.length) {
        slideIndex1 = 0;
    } else if (n < 0) {
        slideIndex1 = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1].style.display = "block";
    
}

let slideIndex2 = 0;
showSlide2(slideIndex2);


function changeSlide2(a) {
    showSlide2(slideIndex2 += a);
}

function showSlide2(a) {
    let slides2 = document.getElementsByClassName("slideQ");
    if (a >= slides2.length) {
        slideIndex2 = 0;
    } else if (a < 0) {
        slideIndex2 = slides2.length - 1;
    }
    for (let j = 0; j < slides2.length; j++) {
        slides2[j].style.display = "none";
    }
    slides2[slideIndex2].style.display = "block";
    
}

let slideIndex3 = 0;
showSlide3(slideIndex3);

function changeSlide3(b) {
    showSlide3(slideIndex3 += b);
}

function showSlide3(b) {
    let slides3 = document.getElementsByClassName("slideL");
    if (b >= slides3.length) {
        slideIndex3 = 0;
    } else if (b < 0) {
        slideIndex3 = slides3.length - 1;
    }
    for (let k = 0; k < slides3.length; k++) {
        slides3[k].style.display = "none";
    }
    slides3[slideIndex3].style.display = "block";
    
}

    
    

