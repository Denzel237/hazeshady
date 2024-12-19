// scripts.js
window.onscroll = function() {
    var menu = document.getElementById("products-menu");
    var headerHeight = document.querySelector("header").offsetHeight;
    
    // Add the 'sticky' class when you reach the top of the header or scroll past it
    if (window.pageYOffset > headerHeight) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
};



