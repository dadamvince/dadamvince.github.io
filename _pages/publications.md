---
layout: page
permalink: /publications/
title: Publications
description:
years: [2025, 2024, 2019, 2018, 2017, 2014]
display_categories: [publication, working paper]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
