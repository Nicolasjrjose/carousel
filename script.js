var slideIndex, slides, dots;

function initGallery() {
    slideIndex=0;//initial value of opacity
    slides=document.getElementsByClassName("imageHolder");//slide value is per image
    slides[slideIndex].style.opacity=1;//unhide image
    
    
    dots=[]; //for dots
    var dotsContainer=document.getElementById("dotsContainer"); //variable with value of dot container div
    
    for(var i=0;i<slides.length;i++) { //to add dot base on numbe of image
        var dot=document.createElement("span"); //dot=span element(add element span)
        dot.classList.add("dots") //follow dots style 
        dot.setAttribute("onClick","moveSlide("+i+")");//to choose image
        dotsContainer.append(dot); // add element span
        dots.push(dot);   
    }
    dots[slideIndex].classList.add=("active");
    
    
    
}

initGallery();

function plusSlides(n) {
    moveSlide(slideIndex+n);

}



function moveSlide(n) {
    var i,current,next;
    var moveSlideAnimClass = {
        forCurrent:"",
        forNext:""
    
    }
    if(n>slideIndex) {
        if(n>=slides.length){n=0}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
    
    }else if(n<slideIndex) {
       if(n<0) {n=slides.length-1} 
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightNextSlide";

    }
    if(n!=slideIndex) {
       next=slides[n];
       current=slides[slideIndex];
       for(i=0;i<slides.length;i++) {
        slides[i].className="imageHolder";
        slides[i].style.opacity=0;
        dots[i].classList.remove("active");
       
       }
       current.classList.add(moveSlideAnimClass.forCurrent);
       next.classList.add(moveSlideAnimClass.forNext);
       dots[n].classList.add("active");
       slideIndex=n;
        
    }

}


var timer=null;

function setTimer(){
    timer=setInterval (function () {
        plusSlides(1);
    }, 5000)

}

setTimer();
 
function playPauseSlides() {
    var playPauseBtn=document.getElementById("playPauseBtn");
    if(timer==null) {
       setTimer();
       playPauseBtn.style.backgroundPositionY="0px";
       playPausePauseBtn.style.display="none";    
    }else{
        clearInterval(timer);
        timer=null;
        playPauseBtn.style.backgroundPositionY="-33px";
        playPausePauseBtn.style.display="block";
    
    }


}


function playSlides() {
    setTimer();
    playPauseBtn.style.backgroundPositionY="0px";
    playPausePauseBtn.style.display="none";     

}

function pauseSlides() {
    clearInterval(timer);
    timer=null;
    playPauseBtn.style.backgroundPositionY="-33px";
    playPausePauseBtn.style.display="block";

}








