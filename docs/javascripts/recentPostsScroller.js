// /docs/javascripts/recentPostsScroller.js
window.addEventListener('scroll', function() {
    var recentPosts = document.getElementById('recent-posts');
    var topValue = Math.max(100, 400 - window.scrollY);
    recentPosts.style.top = topValue + 'px';
});