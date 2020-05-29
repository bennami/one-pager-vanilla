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
    //first you hide them all
    reset();
    //then, show the first image
    sliderImgs[0].style.display = 'block';
}

//show prev
function  slideLeft() {
    reset();
    sliderImgs[current -1].style.display ="block";
    current --;
}

//show next
function  slideRight() {
    reset();
    sliderImgs[current +1].style.display ="block";
    current ++;
}

arrowLeft.addEventListener("click", function () {
    if(current === 0){
    current =  sliderImgs.length;
    }
    slideLeft();
});

arrowRight.addEventListener("click", function () {
    if(current === sliderImgs.length -1){
        current = -1;
    }
    slideRight();
});

startSlide();
