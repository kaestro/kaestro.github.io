// disqus_comment_count.js
window.disqus_config = function () {
    this.page.url = "{{ page.url | prepend: site.baseurl | prepend: site.url }}";  // Set PAGE_URL to the current page's URL
    this.page.identifier = "{{ page.url | prepend: site.github.repository_nwo }}"; // Set PAGE_IDENTIFIER to the current page's identifier
};

(function() {  // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://https-kaestro-github-io.disqus.com/count.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
