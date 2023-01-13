//Mettre le code JavaScript lié à la page photographer.html
var mediaSave;
async function getPhotographerId() {
  const reponse = await fetch("./data/photographers.json");
  const data = await reponse.json()
  //- Récupération de la chaine de requète dans l'url
  const urlId = window.location.search;
  //-Extraction de l'Id
  const urlSearchParams = new URLSearchParams(urlId);
  //- Récupere id photographe
  const getUrlId = urlSearchParams.get("id");
    
  const photographers  = data.photographers;
  const medias = data.media;
  //- Récupere les infos photographe
  const photographer = photographers.find(p => p.id == getUrlId);
  const mediasPhotographer = medias.filter(m => m.photographerId == getUrlId);
  mediaSave = mediasPhotographer
  //- afficher les infos photographe header
  document.getElementById('name').innerText = photographer.name;
  document.getElementById('locality').innerText = `${photographer.city}, ${photographer.country}`; 
  document.getElementById('tagline').innerText = photographer.tagline;
  document.getElementById('contact-name').innerText = photographer.name;
  const picture = `assets/photographers/${photographer.portrait}`;

  const photographerImage = document.getElementById('photographerImage');

  const img = document.createElement( 'img' );
  img.setAttribute("src", picture);
  img.setAttribute("alt", photographer.name);
  img.setAttribute("aria-label", "image");
  photographerImage.appendChild(img);

  displayMedias(mediasPhotographer);


    
  return { photographers }

}

function displayMedias(medias){
  // Total Likes & price account
  const gallery = document.getElementById('container-media');
  gallery.innerHTML= "";
  let totalLike = 0;
  let totalPrice = 0;
  medias.forEach((media, index) => {
    totalLike += media.likes
    // eslint-disable-next-line
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM(index);
    gallery.appendChild(mediaCardDOM);
  });

  medias.forEach((media, index) => {
    totalPrice += media.price
    // eslint-disable-next-line
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM(index);
    gallery.appendChild(mediaCardDOM);
  });
  const totalLikes = document.getElementById('total-likes');
  totalLikes.textContent = totalLike;
    
  const totalPrices = document.getElementById('total-price');
  totalPrices.textContent = totalPrice;
}

// Bouton filtre
const buttonFilter = document.getElementById("buttonFilter");
const filterList = document.getElementById("filterList");

//Bouton filtre accessibility
buttonFilter.setAttribute("aria-label", "boutton trier");
buttonFilter.setAttribute("aria-label", "tabindex", "0");
buttonFilter.setAttribute("aria-labelledby", "buttonFilter");
buttonFilter.setAttribute("aria-haspopup", "listbox");
buttonFilter.setAttribute("aria-expanded", "true");

filterList.setAttribute("aria-hidden", "true");
filterList.setAttribute("role", "listbox");
filterList.setAttribute("aria-labelledby", "buttonFilter");
filterList.setAttribute("tabindex", "-1");

buttonFilter.addEventListener("click", () =>{
    
  buttonFilter.style.display = "none";
  filterList.style.display = "block";
});

filterList.addEventListener("click", () =>{
  buttonFilter.style.display = "flex";
  filterList.style.display = "none";
});
// keyboard navigation 
buttonFilter.addEventListener("keydown", (e) =>{
  if(e.code === "Enter"){
    buttonFilter.style.display = "none";
    filterList.style.display = "block";
  }
});

filterList.addEventListener("keydown", (e) =>{
  if(e.code === "Enter"){
    buttonFilter.style.display = "flex";
    filterList.style.display = "none";
  } 
});
/////////// Filter cards ////////

// Filter by likes
const filterPopulaire = document.getElementById('filter_popular');
filterPopulaire.addEventListener("click", () =>{
  mediaSave.sort((a,b) => {
    return b.likes - a.likes;
  }); 
  displayMedias(mediaSave)
});

// filtre popular accessibility
filterPopulaire.addEventListener("keydown", (e) =>{         
  if (e.code === "Enter"){
    mediaSave.sort((a,b) => {
      return b.likes - a.likes;
    }); 
    displayMedias(mediaSave)
  }   
});

// Filter by date
const filterDate = document.getElementById('filter_date');
filterDate.addEventListener("click", () =>{
  mediaSave.sort((a,b) => {
    return new Date(b.date) - new Date(a.date);
  });
  displayMedias(mediaSave)
});

// filtre date accessibility
filterDate.addEventListener("keydown", (e) =>{
  if (e.code === "Enter"){
    mediaSave.sort((a,b) => {
      return new Date(b.date) - new Date(a.date);
    }); 
    displayMedias(mediaSave)
  }   
});
// Filter by title
const filterTitle = document.getElementById('filter_title');
filterTitle.addEventListener("click", () =>{
  mediaSave.sort((a,b) => {
    return a.title.localeCompare(b.title);
  }); 
  displayMedias(mediaSave)
});

// filtre title accessibility
filterTitle.addEventListener("keydown", (e) =>{
  if (e.code === "Enter"){
    mediaSave.sort((a,b) => {
      return a.title.localeCompare(b.title);
    }); 
    displayMedias(mediaSave)
  }   
});

// Filter Liste order //

filterDate.addEventListener("click", () =>{
  const titleId = document.getElementById('filterTiltle');
  titleId.innerHTML = `Date`;
})

filterPopulaire.addEventListener("click", () =>{
  const titleId = document.getElementById('filterTiltle');
  titleId.innerHTML = `Popilaire`;
})

filterTitle.addEventListener("click", () =>{
  const titleId = document.getElementById('filterTiltle');
  titleId.innerHTML = `Titre`;
})

// keyboard navigation 
filterDate.addEventListener("keydown", (e) =>{
  if (e.code === "Enter"){
    const titleId = document.getElementById('filterTiltle');
    titleId.innerHTML = `Date`;
  }
})
filterPopulaire.addEventListener("keydown", (e) =>{
  if (e.code === "Enter"){
    const titleId = document.getElementById('filterTiltle');
    titleId.innerHTML = `Popilaire`;
  }
    
})
filterTitle.addEventListener("keydown", (e) =>{
  if (e.code === "Enter"){
    const titleId = document.getElementById('filterTiltle');
    titleId.innerHTML = `Titre`;
  }
})
getPhotographerId();


