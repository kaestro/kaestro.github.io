// docs/javascripts/homeButton.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('go-home').onclick = function() {
        window.location.href = '/';
    };
});