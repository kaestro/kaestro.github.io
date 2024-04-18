// /docs/javascripts/headerLinkScroller.js
window.addEventListener('scroll', function() {
    var headerLinks = document.getElementById('header-links');
    var topValue = Math.max(100, 400 - window.scrollY);
    headerLinks.style.top = topValue + 'px';
});