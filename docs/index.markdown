---
layout: front
title: Kaestro's 대장간
---

{% assign ordered_categories = "신변잡기,개발일지,서평,개발이야기,게임이야기,애니이야기,디자인패턴,Algorithm,WeeklyPosts,CodeReviews,ETC,작성중," | split: "," %}

<div class="grid-container">
    <div class="grid-item recommended">
        <h2>추천 글</h2>
        <hr>
        <ul>
            {% assign count = 0%}
            {% for post in site.posts %}
                {% if post.recommended == true %}
                    {% assign count = count | plus: 1 %}
                    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
                    {% if count >= 5 %}
                        {% break %}
                    {% endif %}
                {% endif %}
            {% endfor %}
        </ul>
        <a href="/categories/recommended">See all posts({{ site.data.recommended_count.count }}) in 추천글 </a>
    </div>

{% for category_name in ordered_categories %}
    {% if site.categories[category_name] %}
        <div class="grid-item {% if category_name == '작성중' %}in-progress{% endif %}">
            <h2>{{ category_name }}</h2>
            <hr>
            <ul>
                {% assign count = 0 %}
                {% assign category_posts = site.categories[category_name] %}
                {% assign series_names = category_posts | map: "series" | uniq %}
                {% for series_name in series_names %}
                    {% if series_name and count < 5 %}
                        {% assign series_posts = category_posts | where: "series", series_name %}
                        {% assign min_index = series_posts | map: "seriesIndex" | sort | first %}
                        {% assign max_index = series_posts | map: "seriesIndex" | sort | last %}
                        <li><a href="{{ series_posts.last.url }}">{{ series_name }} ({{ min_index }} ~ {{ max_index }})</a></li>
                        {% assign count = count | plus: 1 %}
                    {% endif %}
                {% endfor %}
                {% assign non_series_posts = category_posts | where_exp: "post", "post.series == nil" %}
                {% for post in non_series_posts %}
                    {% unless post.subtitle contains '작성중' or count >= 5 %}
                        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
                        {% assign count = count | plus: 1 %}
                    {% endunless %}
                {% endfor %}
            </ul>
            <a href="/categories/{{ category_name }}">See all posts({{ site.categories[category_name] | size }}) in {{ category_name }}</a>
        </div>
    {% endif %}
{% endfor %}

<!-- '작성중'인 포스트를 모아놓는 새로운 그리드 -->
<div class="grid-item in-progress">
    <h2>작성중</h2>
    <hr>
    <ul>
        {% for post in site.posts %}
            {% if post.subtitle contains '작성중' %}
                <li><a href="{{ post.url }}">{{ post.title }}</a></li>
            {% endif %}
        {% endfor %}
    </ul>
</div>