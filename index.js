//  navigating through pages //
 const blogBtn = document.getElementById("blogBtn");
    blogBtn.addEventListener("click", function() {
        window.location.href = "blog.html";
    });

// sticky navbar //
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        navbar.style.position = "fixed"; 
        navbar.style.top = "0";          
        navbar.style.width = "100%";     
        navbar.style.zIndex = "1000";  
        } else {
        navbar.style.position = "";       
    }
};