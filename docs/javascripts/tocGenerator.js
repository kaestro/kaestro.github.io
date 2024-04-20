function createHeaderListElement(header) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + header.id;
    a.innerHTML = header.innerHTML; // Use innerHTML instead of textContent
    li.appendChild(a);
    return li;
}

function adjustListLevelToMatchHeader(level, currentList, currentLevel) {
    while (currentLevel < level) {
        const newList = document.createElement('ul');
        currentList.appendChild(newList);
        currentList = newList;
        currentLevel++;
    }
    while (currentLevel > level) {
        currentList = currentList.parentNode;
        currentLevel--;
    }
    return { currentList, currentLevel };
}

function checkIfHeaderShouldBeSkipped(header, foundToc) {
    if (header.textContent === '목차') {
        return { foundToc: 2, skip: true };
    }
    if (header.nodeName === 'H2' && header.textContent !== 'Categories') {
        return { foundToc: foundToc + 1, skip: false };
    }
    return { foundToc, skip: foundToc < 1 };
}

function processHeaderAndAdjustList(header, currentList, currentLevel) {
    const level = parseInt(header.nodeName.substring(1)) - 1; // Subtract 1 to start from h2
    const result = adjustListLevelToMatchHeader(level, currentList, currentLevel);
    const li = createHeaderListElement(header);
    result.currentList.appendChild(li);
    return result;
}
function initializeTocGeneratorVariables() {
    const headers = document.querySelectorAll('h1, h2, h3');
    const headerLinks = document.getElementById('header-links');
    let foundToc = 0;
    let currentList = headerLinks;
    let currentLevel = 0;

    return { headers, headerLinks, foundToc, currentList, currentLevel };
}

document.addEventListener('DOMContentLoaded', function() {
    let { headers, foundToc, currentList, currentLevel } = initializeTocGeneratorVariables();

    for (let i = 0; i < headers.length; i++) {
        const { foundToc: newToc, skip } = checkIfHeaderShouldBeSkipped(headers[i], foundToc);
        foundToc = newToc;
        if (skip) continue;

        const result = processHeaderAndAdjustList(headers[i], currentList, currentLevel);
        currentList = result.currentList;
        currentLevel = result.currentLevel;
    }
});