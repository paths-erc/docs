---
title: "GIS data documentation"
layout: default
permalink: /gis/rasters
---

{% include gis-menu.html %}


<h2><i class="far fa-image"></i> Cartographic coverage. Available series</h2>
The following datasets are available Follows here a continuously updated list of cartographic series and other sparse raster datasets, already processed by “PAThs”.

All datasets are maintained at “PAThs” central repository at Sapienza University of Rome.
In the next few weeks some of the available themes will be made freely available as [Web Map Service (WMS)](https://en.wikipedia.org/wiki/Web_Map_Service).
We are wishing to publish the entire processed archive, but at present we are verifying copyright and license issues.

<ul class="list-group">

{% for item in site.data.series %}
  <li class="list-group-item">
    <a href="javascript:void(0)" class="modalMap" data-seriesid="{{ item.id }}"><strong>{{ item.name }}</strong></a><br />
    Year: {{ item.year }}<br />
    Scale: 1:{{ item.scale }}<br />
    RS: <a href="http://epsg.io/{{ item.rs | replace: "EPSG:", '' }}" target="_blank" rel="nooper">{{ item.rs }}</a><br />
    Source: {{ item.source }}<br />
    {% if item.license %}License: {{ item.license }}<br />{% endif %}
    {% if item.wms %}<span class="text-success">Available as WMS at http://wms.paths-erc.eu/{{ item.wms }}</span><br />{% endif %}
    <button class="btn btn-outline-info btn-sm toggle" data-toggletarget="more{{ item.id }}">More <i class="fas fa-chevron-down"></i></button>
    <ol id="more{{ item.id }}" style="display:none;" class="bg-light py-2">{%
      for f in site.data.rasters.features %}{%
        if f.properties.series_id == item.id
  %}<li class="text-secondary element">
        <a href="javascript:void(0)" class="modalMap" data-sheetid="{{ f.properties.fid }}">{{ f.properties.name }}</a>
      </li>
      {% endif %}{%
 endfor %}
    </ol>
  </li>{%
    endfor %}
</ul>
<script>
const geojson = {{ site.data.rasters | jsonify }};
</script>
