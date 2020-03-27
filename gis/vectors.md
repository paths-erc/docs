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

<div class="m-3 border p-3 bg-danger text-white">
  
  <h3>Notice</h3>

  <p>The PAThs team is currently working on the georeferencing and vectorisation of the maps of Christian religious buildings, such as chapels, churches, monasteries, basilicas, etc. When possible these data will be completed with information on previous building phases. In some cases, a broader urban context is also provided, although the current coverage is highly uneven.</p>

  <p>A <em>very premature stage</em> of this work is being published in real time in the 
  <a href="http://atlas.paths-erc.eu/" target="_blank" rel="noopener nofollow" class="text-white">Atlas</a>. The map preview of each Place displays the already available maps of a specific site; the coverage and the quality of the information is being updated on a daily basis and no warranty is currently provided for these highly incomplete work.</p>

  <p>At the moment, therefore, the PAThs team <em>strongly discourages the usage of these still unstable data</em>; in any case, usage is free, but all the credit goes to the PAThs project, which must be clearly and unmistakably acknowledged for its work.</p>
  
  <p class="border-top text-center">Copyright © PAThs team, Sapienza Università di Roma.<br><small><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" class="text-white">Use, sharing and remixing permitted under terms of the<br>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License<br><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" style="border-width: 0px;"></a></small></p>
  
</div>

All maps are currently availale as a 
[Web Mapping Service (WMS)](https://en.wikipedia.org/wiki/Web_Map_Service), 
published at `http://wms.paths-erc.eu/site-maps`.

As of **{{ site.time | date: '%B %Y' }}** the following layers are available:
- `All site maps (Phases < 0)`
- `All site maps (Phase 0)`
- `All site maps (Phase 1)`
- `All site maps (Phase 2)`
- `All site maps (Phases > 2)`

### Legend and style schema
![WMS legend](/images/wms-legend.png "WMS legend")

---

### Implementation example using leaflet.js

For a working demo check [https://jsbin.com/judoluc/edit?output](https://jsbin.com/judoluc/edit?output).
Feel free to fork and reuse.


---

### Credits & copyright

Copyright © PAThs team, Sapienza Università di Roma.

Use, sharing and remixing permitted under terms of the
[CC-BY-NC-SA 4.0 International](http://creativecommons.org/licenses/by-nc-sa/4.0/) license.

---

### Caveat
A very premature stage of the work is being published in this service. 
The coverage and the quality of the information is being updated on a **daily basis** and 
**no warranty** is currently provided for these highly incomplete work.

Feedback and suggestions are much appreciated.



---

### Abailable maps/sites

{% include geojson-index.html %}
<ul>
{% for el in arr %}
  <li>{{ el }} {% comment %} (<a href="/gis/demo/#{{ el }}" target="_blank">View in demo</a>) {% endcomment %}</li>
{% endfor %}
</ul>
