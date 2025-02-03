const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    //Toggle Mobile Menu Visibility
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the closed button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click
());