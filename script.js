const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

document.addEventListener("DOMContentLoaded", () => {
    loadBlogs();
    initializeMenu();
    initializeSwiper();
});

function initializeMenu() {
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });
    
    menuCloseButton.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            document.body.classList.remove("show-mobile-menu");
        });
    });
}

function initializeSwiper() {
    new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 25,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
}

function postBlog() {
    let blogInput = document.getElementById("blogInput").value;
    if (blogInput.trim() === "") {
        alert("Blog content cannot be empty!");
        return;
    }

    let blogSection = document.getElementById("blogSection");
    let blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");
    let index = Date.now();
    blogDiv.innerHTML = `<p>${blogInput}</p><button onclick="deleteBlog(${index})">Delete</button>`;
    blogDiv.setAttribute("data-id", index);
    blogSection.prepend(blogDiv);
    saveBlog(blogInput, index);
    document.getElementById("blogInput").value = "";
}

function saveBlog(blogText, id) {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push({ text: blogText, id });
    localStorage.setItem("blogs", JSON.stringify(blogs));
}

function loadBlogs() {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    let blogSection = document.getElementById("blogSection");
    blogs.forEach(blog => {
        let blogDiv = document.createElement("div");
        blogDiv.classList.add("blog-post");
        blogDiv.innerHTML = `<p>${blog.text}</p><button onclick="deleteBlog(${blog.id})">Delete</button>`;
        blogDiv.setAttribute("data-id", blog.id);
        blogSection.prepend(blogDiv);
    });
}

function deleteBlog(id) {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs = blogs.filter(blog => blog.id !== id);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    document.querySelector(`[data-id='${id}']`).remove();
}
