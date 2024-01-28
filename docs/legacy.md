---
layout: home
title: Legacy Posts
---

{% for post in site.categories.Legacy %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.date | date: "%B %d, %Y" }}</p>
  <p>{{ post.excerpt }}</p>
  <p><a href="{{ post.url }}">Read more...</a></p>
{% endfor %}