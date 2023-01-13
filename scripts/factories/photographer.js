// eslint-disable-next-line
function photographerFactory(data) {
  const { name, portrait, tagline, city, country, price, id} = data;

  const picture = `assets/photographers/${portrait}`;
  console.log(picture);
  function getUserCardDOM() {

    const article = document.createElement( 'article' );
        
    // generate des liens
    const href = document.createElement( 'a' );
    href.setAttribute( "href", `photographer.html?id=${data.id}` );
    href.style.textDecoration = "none";

    // generate de l'image
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    img.setAttribute("aria-label", "image");

    // generate des texts
    const h2 = document.createElement( 'h2' );
    h2.textContent = name;
    const h3 = document.createElement( 'h3' );
    h3.textContent = `${city}, ${country}`;

    const cost = document.createElement( 'p' );
    cost.className = "price";

    const subPhrase = document.createElement( 'p' );
        
    subPhrase.textContent = tagline;
    subPhrase.className = "sub";
    cost.textContent = `${price}€/jour`;
        
        
    href.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(subPhrase);
    article.appendChild(cost);

    return (article, href);
  }
  return { name, picture, id, getUserCardDOM }
}