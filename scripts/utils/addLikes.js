// Gestion des likes
function addLike(el){

        let nombreLike = el.parentNode.parentNode.innerText;
        const parent = el.parentNode.parentNode;
        // Remove likes
        if(parent.classList.contains('liked')){ 
            nombreLike--;
            parent.classList.remove('liked');
            document.querySelector('#total-likes').innerHTML--;
        }else {
            // add likes
            nombreLike++;
            parent.classList.add('liked');
            document.querySelector('#total-likes').innerHTML++;
        }
        parent.querySelector('.likes').innerText = nombreLike;
       
} 
// Accessibilité 

// const eLike = document.getElementById("key-like");
// console.log(eLike);
// eLike.addEventListener('keyup',(e) =>{
//     if (e.key === "Enter") {
//         addLike();
//     }
// })
