const openingBtn = document.getElementById("openingBtn");
const middleBtn = document.getElementById("middleBtn");
const endGameBtn = document.getElementById("endGameBtn");
const openingForm = document.getElementById("openingForm");
const middleForm = document.getElementById("middleForm");
const endGameForm = document.getElementById("endGameForm");

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