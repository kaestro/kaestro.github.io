---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<head>
    <meta name="google-site-verification" content="swFW3uc8I4itY8f-nuRC4KyC8OevDsMkTn_SnB_sOGE" />
</head>

{% assign ordered_categories = "신변잡기,개발일지,리뷰,개발이야기,WeeklyMedium,작정중" | split: "," %}

{% for category_name in ordered_categories %}
{% if site.categories[category_name] %}
<h2>{{ category_name }}</h2>
<ul>
{% for post in site.categories[category_name] %}
<li>
    <a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}

<hr style="border: 1px solid;">

{% if site.categories['Pre-Renewal'] %}
<h2 style="color: red;">Pre-Renewal</h2>
<ul>
{% for post in site.categories['Pre-Renewal'] %}
<li>
    <a style="color: gray;" href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
{% endif %}

{% if site.categories['ProtoType'] %}
<h2 style="color: red;">ProtoType</h2>
<ul>
{% for post in site.categories['ProtoType'] %}
<li>
    <a style="color: gray;" href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
{% endif %}