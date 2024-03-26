---
layout: default
---

<head>
    <meta name="google-site-verification" content="swFW3uc8I4itY8f-nuRC4KyC8OevDsMkTn_SnB_sOGE" />
</head>

{% assign ordered_categories = "신변잡기,개발일지,리뷰,개발이야기,kubernetes,디자인패턴,WeeklyMedium,ETC,작성중," | split: "," %}

{% for category_name in ordered_categories %}
{% if site.categories[category_name] %}
<h2>{{ category_name }}</h2>
<ul>
{% for post in site.categories[category_name] limit: 5 %}
<li>
    <a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
<a href="/categories/{{ category_name }}">See all posts in {{ category_name }}</a>
{% endif %}
{% endfor %}
