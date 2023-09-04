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

var piecesBtn = document.getElementsByClassName("piecesBtn");
var piecesContent = document.getElementsByClassName("piecesContent");
var i;

for (var i = 0; i < piecesBtn.length; i++) {
  piecesBtn[i].addEventListener("click", function () {
    var content = this.nextElementSibling;

    for (var j = 0; j < piecesContent.length; j++) {
      if (piecesContent[j] !== content) {
        piecesContent[j].style.display = "none";
      }
    }

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}