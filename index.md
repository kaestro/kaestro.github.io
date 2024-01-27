# Index.md default

{% for post in site.posts %}
  {% unless post.categories contains 'Legacy' %}
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
  {% endunless %}
{% endfor %}