
function openLightbox(index){
    const getContainerCarousel = document.getElementById("container-carousel");
    getContainerCarousel.style.visibility = "visible";
    const medialightbox = mediaSave[index];
    let imageVideo = "";
    if(medialightbox.image){
        imageVideo = `<img src="assets/medias/${medialightbox.image}"/><h2 class="carousel-sous-titre">${medialightbox.title}</h2>`;
    } else{
        imageVideo = `<video controls width="100"> <source src="assets/medias/${medialightbox.video}" 
                        type="video/mp4"/></video><h2 class="carousel-sous-titre">${medialightbox.title}</h2>`;
    }
    document.getElementById('imageVideoLightbox').innerHTML = imageVideo;
    document.getElementById('imageVideoLightbox').dataset.id = index;
};

function next(){
    let index = parseInt(document.getElementById('imageVideoLightbox').dataset.id)+1;
    if(mediaSave.length == index){
        index = 0
    }
    openLightbox(index);
};
function prev(){
    let index = parseInt(document.getElementById('imageVideoLightbox').dataset.id)-1;
    if(index < 0 ){
        index = mediaSave.length -1;
    }
    openLightbox(index);
};

function closeLightBox() {
        const getContainerCarousel = document.getElementById("container-carousel");
        getContainerCarousel.style.visibility = "hidden";
}; 

// accessibility keyboard

const keyboardLink = document.querySelectorAll("card-media");

keyboardLink.addEventListener("keydown", (e) =>{
    if (e.code === "Enter"){
        openLightbox(index);
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
        next();
    }
});


document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") {
        prev();
    }
});


document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
        closeLightBox();
    }
});


