let sliderImgs = document.querySelectorAll(".imgSlide");
let arrowRight =document.querySelector(".prev");
let arrowLeft =  document.querySelector(".next");
let current = 0;

//hide all images
function reset() {

    for(let i  = 0; i< sliderImgs.length;i++){
        sliderImgs[i].style.display="none"
    }
}

//call the reset, and only show first one
function startSlide() {
reset();

}
startSlide();
