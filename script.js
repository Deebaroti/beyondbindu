const menuOpenButton = document.querySelector("#menu-open-button")

menuOpenButton.addEventListener("click",()=>{
    //Toggle Mobile Menu Visibility
    document.body.classList.toggle("show-mobile-menu");
})