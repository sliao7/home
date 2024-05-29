---
title: "Blog"
layout: page
sitemap: false
permalink: /blog/
---

### Welcome!

<ul>
  {% for post in site.posts %}
    <li>
      {{ post.date | date_to_string }}: <a href="{{ post.url }}">{{ post.title}}</a>
    </li>
  {% endfor %}
</ul>

<!-- {% for tag in site.tags %}

  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %} -->

<!-- {% for category in site.categories %}

  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %} -->

<ul>
    {% for post in site.posts %}
        {% if post.categories contains "movies" %}
            <li> 
                {{ post.date | date_to_string }}: <a href="{{ post.url }}">{{ post.title}}</a>
                {{ post.excerpt }}
            </li>
        {% endif %}
    {% endfor %}
</ul>
