// /docs/javascripts/headerLinkScroller.js
// 사이드바(목차, 카테고리)를 본문 영역 기준으로 동적 배치

(function() {
    // === 레이아웃 상수 정의 ===
    var SIDEBAR_WIDTH = 180;           // 카테고리 사이드바 CSS 너비
    var SIDEBAR_PADDING = 32;          // padding: 1em * 2
    var SIDEBAR_BORDER = 2;            // border: 1px * 2
    var SIDEBAR_TOTAL_WIDTH = SIDEBAR_WIDTH + SIDEBAR_PADDING + SIDEBAR_BORDER; // 214px
    var MIN_GAP = 20;                  // 본문과 사이드바 최소 간격
    var MIN_LEFT_MARGIN = 10;          // 화면 왼쪽 끝 최소 간격

    var headerLinks = document.getElementById('header-links');
    var headerLinksToggler = document.getElementById('header-links-toggler');
    var categoryList = document.getElementById('category-list');
    var recentPosts = document.getElementById('recent-posts');
    var goTop = document.getElementById('go-top');
    var goHome = document.getElementById('go-home');
    var goBottom = document.getElementById('go-bottom');

    function updateSidebarPositions() {
        var mainContent = document.querySelector('.main-content');
        if (!mainContent) return;

        var rect = mainContent.getBoundingClientRect();
        var scrollY = window.scrollY || window.pageYOffset;

        // 헤더 높이 확인
        var pageHeader = document.querySelector('.page-header');
        var headerBottom = pageHeader ? pageHeader.getBoundingClientRect().bottom : 200;

        // 수직 위치: 헤더 아래 + 여유 공간, 스크롤 시 고정
        var minTop = Math.max(headerBottom + 20, 120);
        var topValue = Math.max(minTop, 300 - scrollY * 0.3);

        // 목차 토글 버튼 - 본문 오른쪽에 배치
        // tocGenerator.js에서 숨김 처리된 경우 건드리지 않음
        if (headerLinksToggler && headerLinksToggler.dataset.hidden !== 'true') {
            var rightPosition = rect.right + 20;
            // 화면 오른쪽 끝을 넘지 않도록
            if (rightPosition + 140 > window.innerWidth) {
                headerLinksToggler.style.visibility = 'hidden';
                if (headerLinks) headerLinks.style.visibility = 'hidden';
            } else {
                headerLinksToggler.style.visibility = '';
                headerLinksToggler.style.left = rightPosition + 'px';
                headerLinksToggler.style.top = topValue + 'px';

                // 목차 컨테이너
                if (headerLinks && headerLinks.dataset.hidden !== 'true') {
                    headerLinks.style.visibility = '';
                    headerLinks.style.left = rightPosition + 'px';
                    headerLinks.style.top = (topValue + 45) + 'px';
                }
            }
        }

        // 카테고리 사이드바 - 본문 왼쪽에 배치
        if (categoryList) {
            // 사이드바가 필요로 하는 최소 공간 계산
            var requiredSpace = SIDEBAR_TOTAL_WIDTH + MIN_GAP + MIN_LEFT_MARGIN;

            // 공간 부족 시 숨김 처리
            if (rect.left < requiredSpace) {
                categoryList.style.visibility = 'hidden';
                categoryList.style.pointerEvents = 'none';
            } else {
                // 사이드바 오른쪽 끝이 본문에서 MIN_GAP만큼 떨어지도록 배치
                var leftPosition = rect.left - MIN_GAP - SIDEBAR_TOTAL_WIDTH;

                categoryList.style.visibility = '';
                categoryList.style.pointerEvents = '';
                categoryList.style.left = leftPosition + 'px';
                categoryList.style.top = topValue + 'px';
            }
        }

        // 최신글 사이드바 - 본문 오른쪽에 배치 (front 페이지용)
        if (recentPosts) {
            var rightPosition = rect.right + 20;
            // 화면 오른쪽 끝을 넘지 않도록
            if (rightPosition + 220 > window.innerWidth) {
                recentPosts.style.visibility = 'hidden';
            } else {
                recentPosts.style.visibility = '';
                recentPosts.style.left = rightPosition + 'px';
                recentPosts.style.top = topValue + 'px';
            }
        }

        // 스크롤 버튼 - 본문 왼쪽 경계에 붙어서 배치
        var buttonLeftPosition = rect.left - 49; // 48px 버튼 + 1px 간격
        var buttonTopValue = topValue + 100; // 헤더 아래 적당한 위치

        // 화면 왼쪽 끝을 넘지 않도록
        if (buttonLeftPosition >= 0) {
            if (goTop) {
                goTop.style.right = 'auto';
                goTop.style.left = buttonLeftPosition + 'px';
                goTop.style.bottom = 'auto';
                goTop.style.top = buttonTopValue + 'px';
            }
            if (goHome) {
                goHome.style.right = 'auto';
                goHome.style.left = buttonLeftPosition + 'px';
                goHome.style.bottom = 'auto';
                goHome.style.top = (buttonTopValue + 44) + 'px';
            }
            if (goBottom) {
                goBottom.style.right = 'auto';
                goBottom.style.left = buttonLeftPosition + 'px';
                goBottom.style.bottom = 'auto';
                goBottom.style.top = (buttonTopValue + 88) + 'px';
            }
        }
    }

    // 이벤트 리스너 등록
    window.addEventListener('scroll', updateSidebarPositions);
    window.addEventListener('resize', updateSidebarPositions);
    document.addEventListener('DOMContentLoaded', updateSidebarPositions);

    // 초기 실행
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        updateSidebarPositions();
    }
})();
