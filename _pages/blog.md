---
title: "Shasha's Blog"
layout: page
sitemap: false
permalink: /blog/
navbar_color: "#e71919"
---

<!-- <ul>
  {% for post in site.posts %}
    <li>
      {{ post.date | date_to_string }}: <a href="{{ post.url }}">{{ post.title}}</a>
    </li>
  {% endfor %}
</ul> -->

<!-- {% for tag in site.tags %}

  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %} -->

{% for category in site.categories %}

  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li style="font-size: 18pt"><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> <span class="float-right"> {{ post.date | date_to_string }} </span></li>
    {% endfor %}
  </ul>
{% endfor %}

<!-- <ul>
    {% for post in site.posts %}
        {% if post.categories contains "movies" %}
            <li>
                {{ post.date | date_to_string }}: <a href="{{ post.url }}">{{ post.title}}</a>
                {{ post.excerpt }}
            </li>
        {% endif %}
    {% endfor %}
</ul> -->
