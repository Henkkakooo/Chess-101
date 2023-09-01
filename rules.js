const formS = document.getElementById("setup");
const formP = document.getElementById("pieces");
const formR = document.getElementById("rules");

const sBtn = document.getElementById("sBtn");
const pBtn = document.getElementById("pBtn");
const rBtn = document.getElementById("rBtn");

sBtn.addEventListener("click", function(e){
    e.preventDefault();

    formS.style.display = formS.style.display === "none" ? "block" : "none";
    formP.style.display = "none";
    formR.style.display = "none";
});
pBtn.addEventListener("click", function(e){
    e.preventDefault();

    formP.style.display = formP.style.display === "none" ? "block" : "none";
    formS.style.display = "none";
    formR.style.display = "none";
});
rBtn.addEventListener("click", function(e){
    e.preventDefault();
    
    formR.style.display = formR.style.display === "none" ? "block" : "none";
    formS.style.display = "none";
    formP.style.display = "none";
});

let slideIndex1 = 0;
showSlide1(slideIndex1);

function changeSlide1(a) {
    showSlide1(slideIndex1 += a);
}

function showSlide1(a) {
    let slides1 = document.getElementsByClassName("item");
    if (a >= slides1.length) {
        slideIndex1 = 0;
    } else if (a < 0) {
        slideIndex1 = slides1.length - 1;
    }
    for (let j = 0; j < slides1.length; j++) {
        slides1[j].style.display = "none";
    }
    slides1[slideIndex1].style.display = "block";
    window.scrollTo(0, document.body.scrollHeight);
}
