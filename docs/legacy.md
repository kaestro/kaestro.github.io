---
layout: page
title: "Legacy Posts"
---

{% for post in site.categories.Legacy %}
    <h2><a href="{{ post.url }}">{{ post.title}} </a></h2>
    <p>{{ post.excerpt }}</p>
{% endfor %}