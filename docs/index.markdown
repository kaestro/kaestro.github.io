---
layout: front
---

<head> <meta name="google-site-verification" content="swFW3uc8I4itY8f-nuRC4KyC8OevDsMkTn_SnB_sOGE" /> </head>

{% assign ordered_categories = "신변잡기,개발일지,서평,개발이야기,CodeReviews,kubernetes,디자인패턴,WeeklyPosts,ETC,작성중," | split: "," %}

<div class="grid-container">
    <div class="grid-item recommended">
        <h2>추천 글</h2>
        <hr>
        <ul>
            {% for post in site.posts %}
                {% assign count = 0%}
                {% if post.recommended == true %}
                    {% assign count = count | plus: 1 %}
                    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
                    {% if count > 5 %}
                        {% break %}
                    {% endif %}
                {% endif %}
            {% endfor %}
        </ul>
    </div>

{% for category_name in ordered_categories %}
    {% if site.categories[category_name] %}
        <div class="grid-item {% if category_name == '작성중' %}in-progress{% endif %}">
            <h2>{{ category_name }}</h2>
            <hr>
            <ul>
                {% for post in site.categories[category_name] limit: 5 %}
                    <li> <a href="{{ post.url }}">{{ post.title }}</a> </li>
                {% endfor %}
            </ul>
                <a href="/categories/{{ category_name }}">See all posts({{ site.categories[category_name] | size }}) in {{ category_name }}</a>
        </div>
    {% endif %}
{% endfor %}

</div>
