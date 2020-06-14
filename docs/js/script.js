window.addEventListener('load',()=>{
    let nav = document.querySelector("nav");
    let barraNav = document.querySelector(".barraNav")
    let a = barraNav.children[0]
    window.onscroll = function() {
        
        if(window.scrollY > 200){
            nav.style.backgroundColor = "rgba(255, 101, 0, 0.8)"
        }else{
            nav.style.backgroundColor = "transparent" 
        }
    };
})