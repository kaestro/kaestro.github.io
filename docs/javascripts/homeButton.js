// docs/javascripts/homeButton.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('go-home').onclick = function() {
        // Delay the redirection by 1 second (1000 milliseconds)
        setTimeout(function() {
            window.location.href = '/';
        }, 1000);
    };
});