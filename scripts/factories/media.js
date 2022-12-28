function mediaFactory(media) {
    const {title, image, video, likes, } = media;
    
    function getMediaCardDOM(index) {

        // Generate Media Factory
        const container = document.createElement( 'a' );
        container.setAttribute("class", "card-media");
        
        const figureEl = document.createElement( 'figure' );
        figureEl.setAttribute("class", "figure-box");

        const figureCaptionEl = document.createElement( 'figcaption' );
        figureCaptionEl.setAttribute("class", "legende-box");

        const titleEl = document.createElement('span');
        titleEl.setAttribute("class", "card-title");

        const btn = document.createElement('button');
        btn.setAttribute("class", "btn-like");
        btn.setAttribute("id", "key-like");
        btn.setAttribute("role", "button");
        btn.setAttribute("aria-label", "like media");

        const likesNum = document.createElement('span');
        likesNum.setAttribute("class", "likes");

        const spanLikeIcon = document.createElement( 'span' );
        const likeIcon = document.createElement( 'i' );
        likeIcon.setAttribute("class", "far fa-heart icon-like");
        likeIcon.setAttribute("tabindex", "0");
        likeIcon.setAttribute("onclick", `addLike(this)`);
        likeIcon.setAttribute("onkeydown", `addLike(this)`);

        // Icon liked 
        const spanLikedIcon = document.createElement( 'span' );
        const likedIcon = document.createElement( 'i' );
        likedIcon.setAttribute("class", "fas fa-heart fa-solid icon-liked");
        
        titleEl.textContent = title;
        likesNum.textContent =  likes;

        
        
        // Condition video or images
        if(image){
            const picture = `assets/medias/${image}`;
            const mediaImg = document.createElement( 'img' );
            mediaImg.setAttribute("src", picture);
            mediaImg.setAttribute("alt", title);
            mediaImg.setAttribute("aria-label", 'image');
            mediaImg.setAttribute("tabindex", "0");
            mediaImg.setAttribute("onclick", `openLightbox(${index})`);
            figureEl.appendChild(mediaImg);
        } else{
            const mediaVideo = `assets/medias/${video}`;
            const mp4 = document.createElement( 'video' );
            mp4.setAttribute("src", mediaVideo);
            mp4.setAttribute("alt", title);
            mp4.setAttribute("type", "video/mp4");
            mp4.setAttribute("aria-label", "video");
            mp4.setAttribute("tabindex", "0");
            mp4.setAttribute("onclick", `openLightbox(${index})`);
            
            figureEl.appendChild(mp4);
        }
       
        
        figureCaptionEl.appendChild(titleEl);
        figureCaptionEl.appendChild(btn);
        
       
        btn.appendChild(likesNum);
        btn.appendChild(spanLikeIcon);
        spanLikeIcon.appendChild(likeIcon);

        btn.appendChild(spanLikedIcon);
        spanLikedIcon.appendChild(likedIcon);

        container.appendChild(figureEl);
        container.appendChild(figureCaptionEl);

        return container;
        
    }
    return { image, video, likes, getMediaCardDOM }
    
}