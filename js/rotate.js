var badge = document.getElementById("badge");
    
window.addEventListener("scroll", function() {
    badge.style.transform = "rotate("+window.pageYOffset*0.15+"deg)";
});
