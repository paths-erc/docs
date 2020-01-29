---
title: "GIS data repository & documentation"
layout: default
permalink: /gis/vectors
---

{% include gis-menu.html %}
## Available vector themes

<ul class="list-group">
{% for ds in site.data.vectors %}

  <li class="list-group-item" id="{{ ds.name | downcase | replace: " ", "-"}}">
    <strong>{{ ds.name }}</strong>
    <br>Created on {{ ds.date_created }}
    <button class="btn btn-outline-info btn-sm toggle" data-toggletarget="more{{ forloop.index }}">
      More <i class="fas fa-chevron-down"></i>
    </button>
    <div id="more{{ forloop.index }}" style="display:none;" class="bg-light p-2">
      <strong>Description</strong>: {{ ds.description }}
      <br><strong>Language</strong>: {{ ds.lang }}
      {% if ds.epsg %}
      <strong><br>EPSG</strong>: <a href="http://epsg.io/{{ ds.epsg }}">{{ ds.epsg }}</a>{% endif %}
      <br><strong>Credits</strong>
      <ul>
        {% for a in ds.authors %}
        <li>
        {{ a.role }}: {{ a.name }}
        {% if a.email %}
          <a href="mailto:{{ a.email }}">{{ a.email }}</a>>
        {% endif %}
        {% if a.web %}
          <br><a href="{{ a.web }}">{{ a.web }}</a>
        {% endif %}
        </li>
        {% endfor %}
      </ul>
      <strong>License</strong>: {{ ds.license }}
      <br><strong>Copyright</strong>: {{ ds.copyright }}
      <br><strong>Availability</strong>:
      <ul>
        {% for f in ds.availability %}
        <li>
          <a href="{{ f[1] }}">{{ f[0] }}</a>
        </li>
        {% endfor %}
      </ul>
    </div>

  </li>
{% else %}

<li>Sorry, there are no vector data available yet, but we will have some soon.</li>

{% endfor %}
</ul>

---

## List of available maps vectorized using the SVP protocol
{% include geojson-index.html %}
<ul>
{% for el in arr %}
  <li>{{ el }} (<a href="/gis/demo/#{{ el }}" target="_blank">View in demo</a>)</li>
{% endfor %}
</ul>
