window.addEventListener('load',()=>{
    let nav = document.querySelector("nav");
    let barraNav = document.querySelector(".barraNav")
    let a = barraNav.children[0]
    window.onscroll = function() {
        
        if(window.scrollY > 50){
            nav.classList.add('scroleo')
        }else{
            nav.classList.remove('scroleo')
        }
    };
})