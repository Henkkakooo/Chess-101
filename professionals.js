const proImages = document.querySelectorAll(".proImage");
const toBlur = document.querySelectorAll(".proList");

proImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    toBlur.classList.add("blur");

    
  });

  image.addEventListener("mouseout", () => {
    toBlur.classList.remove("blur");
  });
});