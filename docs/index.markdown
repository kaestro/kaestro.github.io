---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

{% for category in site.categories %}
{% if category.first != 'Legacy' %}
<h2>{{ category | first }}</h2>
<ul>
{% for post in category.last %}
<li>
    <a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}