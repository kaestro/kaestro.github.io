// docs/javascripts/tocGenerator.js

// Description: This script generates a table of contents (TOC) based on the headers in the document.
// It also adds a button to toggle the visibility of the TOC.
// The TOC is generated as an unordered list with links to the headers.
document.addEventListener('DOMContentLoaded', function() {
    let { headers, foundToc, currentList, currentLevel, baseLevel } = initializeTocGeneratorVariables();

    generateTocFromHeaders(headers, foundToc, currentList, currentLevel, baseLevel);
    addToggleButtonListener();
});

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
    // 목차 자체와 Categories 제목은 제외
    if (header.textContent === '목차' || header.textContent === 'Categories') {
        return { foundToc, skip: true };
    }

    // 관련글 섹션 헤더는 제외
    if (header.textContent.includes('관련') || header.textContent.includes('Related')) {
        return { foundToc, skip: true };
    }

    // 모든 헤더(H1, H2, H3)가 TOC를 시작할 수 있음
    return { foundToc: foundToc + 1, skip: false };
}

function processHeaderAndAdjustList(header, currentList, currentLevel, baseLevel) {
    // baseLevel: H1 포함 시 1, H2부터 시작 시 2
    const headerLevel = parseInt(header.nodeName.substring(1));
    const level = headerLevel - baseLevel + 1; // 상대적 레벨 계산
    const result = adjustListLevelToMatchHeader(level, currentList, currentLevel);
    const li = createHeaderListElement(header);
    result.currentList.appendChild(li);
    return result;
}
function initializeTocGeneratorVariables() {
    const mainContent = document.querySelector('.main-content');
    const headerLinks = document.getElementById('header-links');

    if (!mainContent || !headerLinks) {
        return { headers: [], headerLinks: null, foundToc: 0, currentList: null, currentLevel: 0 };
    }

    // .main-content 내부의 헤더만 검색 (사이드바 제외)
    const allHeaders = mainContent.querySelectorAll('h1, h2, h3');

    // H1 개수 확인 - 2개 이상이면 본문 섹션용으로 사용 중
    const h1Count = mainContent.querySelectorAll('h1').length;
    const includeH1 = h1Count >= 2; // 본문에 여러 H1이 있으면 포함

    // H1 포함 여부에 따라 필터링
    let headers = [];
    for (let h of allHeaders) {
        if (h.nodeName === 'H1' && !includeH1) continue;
        headers.push(h);
    }

    let foundToc = 0;
    let currentList = headerLinks;
    let currentLevel = 0;

    // baseLevel: H1 포함 시 1, H2부터 시작 시 2
    const baseLevel = includeH1 ? 1 : 2;

    return { headers, headerLinks, foundToc, currentList, currentLevel, baseLevel };
}

function generateTocFromHeaders(headers, foundToc, currentList, currentLevel, baseLevel) {
    for (let i = 0; i < headers.length; i++) {
        const { foundToc: newToc, skip } = checkIfHeaderShouldBeSkipped(headers[i], foundToc);
        foundToc = newToc;
        if (skip) continue;

        const result = processHeaderAndAdjustList(headers[i], currentList, currentLevel, baseLevel);
        currentList = result.currentList;
        currentLevel = result.currentLevel;
    }
}

function addToggleButtonListener() {
    const headerLinks = document.getElementById('header-links');
    const toggleButton = document.getElementById('header-links-toggler');

    if (!headerLinks || !toggleButton) return;

    // 실제 목차 항목(li 또는 a)이 있는지 확인
    const hasContent = headerLinks.querySelectorAll('li, a').length > 0;

    if (!hasContent) {
        toggleButton.style.display = 'none';
        toggleButton.dataset.hidden = 'true';
        headerLinks.style.display = 'none';
        headerLinks.dataset.hidden = 'true';
        return;
    }

    // 기본 상태: 열림
    headerLinks.classList.add('expanded');
    toggleButton.textContent = '목차 닫기';

    toggleButton.addEventListener('click', function() {
        headerLinks.classList.toggle('expanded');
        toggleButton.textContent = headerLinks.classList.contains('expanded')
            ? '목차 닫기'
            : '목차 열기';
    });
}
