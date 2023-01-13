
function openLightbox(index){
  const getContainerCarousel = document.getElementById("container-carousel");
  getContainerCarousel.style.visibility = "visible";
  // eslint-disable-next-line
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
}

function next(){
  let index = parseInt(document.getElementById('imageVideoLightbox').dataset.id)+1;
  // eslint-disable-next-line
  if(mediaSave.length === index){
    index = 0
  }
  openLightbox(index);
}
function prev(){
  let index = parseInt(document.getElementById('imageVideoLightbox').dataset.id)-1;
  if(index < 0 ){
    // eslint-disable-next-line
    index = mediaSave.length -1;
  }
  openLightbox(index);
}

function closeLightBox() {
  const getContainerCarousel = document.getElementById("container-carousel");
  getContainerCarousel.style.visibility = "hidden";
} 

// accessibility keyboard

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


