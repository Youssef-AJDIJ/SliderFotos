const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");
const imageUpdate = document.getElementById("image-update");


const images = [
  "img/foto-1.jpg",
  "img/foto-2.jpg",
  "img/foto-3.jpg",
  "img/foto-4.jpg",
  "img/foto-5.jpg",
  "img/foto-6.jpg",
];

let currentIndex = 0;

// Button click right

btnRight.addEventListener("click", () => {
  currentIndex++;

    if (currentIndex <= images.length - 1) {
        imageUpdate.src = images[currentIndex];
    }

  btnRight.style.display = currentIndex < images.length -1 ? "block" : "none"
  btnLeft.style.display = currentIndex < 0 ? "none" : "block"

  console.log(currentIndex);
});


// Button click left 

btnLeft.addEventListener("click", () => {
    currentIndex--;
    
        if (currentIndex >= 0) {
            imageUpdate.src = images[currentIndex];
        } 
    
    
    btnRight.style.display = currentIndex < images.length -1 ? "block" : "none"
    btnLeft.style.display = currentIndex > 0 ? "block" : "none"

    console.log(currentIndex);
});





  // Mostrar u ocultar flecha derecha
/*   if (currentIndex < images.length - 1) {
     btnRight.style.display = "block";
   } else {
     btnRight.style.display = "none";
   }
     */