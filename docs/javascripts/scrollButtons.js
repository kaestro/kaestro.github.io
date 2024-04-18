// docs/javascripts/scrollButtons.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('go-top').onclick = function() {
        window.scrollTo(0, 0);
    };

    document.getElementById('go-bottom').onclick = function() {
        window.scrollTo(0, document.body.scrollHeight);
    };
});