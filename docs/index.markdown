---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

{% for category in site.categories %}
{% if category[0] != 'ProtoType' and category[0] != 'Pre-Renewal' and category[0] != 'Legacy' %}
<h2>{{ category[0] }}</h2>
<ul>
{% for post in category[1] %}
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