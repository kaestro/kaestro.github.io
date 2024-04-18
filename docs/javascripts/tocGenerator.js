document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('h1, h2, h3');
    var headerLinks = document.getElementById('header-links');

    var foundToc = false;
    var currentList = headerLinks;
    var currentLevel = 0;
    for (var i = 0; i < headers.length; i++) {
    if (headers[i].textContent === '목차') {
        foundToc = true;
        continue;
    }
    if (!foundToc) continue;

    var level = parseInt(headers[i].nodeName.substring(1));
    while (currentLevel < level) {
        var newList = document.createElement('ul');
        currentList.appendChild(newList);
        currentList = newList;
        currentLevel++;
    }
    while (currentLevel > level) {
        currentList = currentList.parentNode;
        currentLevel--;
    }

    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + headers[i].id;
    a.innerHTML = headers[i].innerHTML; // Use innerHTML instead of textContent
    li.appendChild(a);

    currentList.appendChild(li);
    }
});