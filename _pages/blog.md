---
title: "Shasha's Blog"
layout: page
sitemap: false
permalink: /blog/
navbar_color: "#e71919"
---
{% for category in site.categories %}

## {{ category[0] }}

{% assign posts_by_tag = category[1] | group_by_exp: "post", "post.tag" %}
{% for tag in posts_by_tag %}

### {{ tag.name }}

<div class="card-container">
{% for post in tag.items %}
<a class="post-card" href="{{ post.url }}">
{% if post.image %}
<div class="card-image" style="background-image: url('{{ post.image }}');"></div>
{% endif %}
<div class="card-content">
<h3>{{ post.title }}</h3>
<p class="card-date">{{ post.date | date_to_string }}</p>
<p class="card-excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
</div>
</a>
{% endfor %}
</div>

{% endfor %}
{% endfor %}