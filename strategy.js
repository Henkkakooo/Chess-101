const openingBtn = document.getElementById("openingBtn");
const middleBtn = document.getElementById("middleBtn");
const endGameBtn = document.getElementById("endGameBtn");
const openingForm = document.getElementById("openingForm");
const middleForm = document.getElementById("middleForm");
const endGameForm = document.getElementById("endGameForm");
const termsYes = document.getElementById("terminologyYes");
const termsNo = document.getElementById("terminologyNo");
const termsForm = document.getElementById("termsForm");
const yesOrNo = document.getElementById("yesOrNo");
const questionForm = document.getElementById("yesOrNo");
const strategyForm = document.getElementById("strategy");
const showTerms = document.getElementById("showTerms");
const termsBack = document.getElementById("termsBack");


termsBack.addEventListener("click", function(e){
    e.preventDefault();
    strategyForm.style.display = strategyForm.style.display === "none"? "block" : "none";
    termsForm.style.display = "none";
});

termsYes.addEventListener("click", function(e){
    e.preventDefault();
    termsForm.style.display = termsForm.style.display === "none"? "block" : "none";
    yesOrNo.style.display = "none";

});

termsNo.addEventListener("click", function(e){
    e.preventDefault();
    strategyForm.style.display = strategyForm.style.display === "none"? "block" : "none";
    
    yesOrNo.style.display = "none";
});

showTerms.addEventListener("click", function(e){
    e.preventDefault();
    termsForm.style.display = termsForm.style.display === "none"? "block" : "none";
    strategyForm.style.display = "none";
});

openingBtn.addEventListener("click", function(e){
    e.preventDefault();

    openingForm.style.display = openingForm.style.display === "none" ? "block" : "none";
    middleForm.style.display = "none";
    endGameForm.style.display = "none";
});

middleBtn.addEventListener("click", function(e){
    e.preventDefault();

    middleForm.style.display = middleForm.style.display === "none" ? "block" : "none";
    openingForm.style.display = "none";
    endGameForm.style.display = "none";
});

endGameBtn.addEventListener("click", function(e){
    e.preventDefault();

    endGameForm.style.display = endGameForm.style.display === "none" ? "block" : "none";
    openingForm.style.display = "none";
    middleForm.style.display = "none";

});

function showH3(h2Element){
    var h3Element = h2Element.nextElementSibling;
    if (h3Element.style.display === "none" || h3Element.style.display === "") {
        h3Element.style.display = "block";
    } else {
        h3Element.style.display = "none";
    }
}    