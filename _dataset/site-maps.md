---
name: Maps of Buildings of Christian Architecture
type: multi_format_map
date_created: 2020-04-30
scale: multiple
rs: EPSG:4326
preview: false
copyright: Peter Grossmann & PAThs team.
license: CC BY-NC-SA 4.0
availability:
  wms: site-maps
  other: WFS and direct access to vector data is available on demand
credits:
  - role: Topographical survey & map drafting
    name: Peter Grossmann
  - role: Digitization, georeferencing, vectorization
    name: PAThs team
---

The PAThs team is currently working on the georeferencing and vectorisation of the maps of Christian religious buildings, such as chapels, churches, monasteries, basilicas, etc. When possible these data will be completed with information on previous building phases. In some cases, a broader urban context is also provided, although the current coverage is highly uneven.

A very premature stage of this work is being published in real time in the Atlas. The map preview of each Place displays the already available maps of a specific site; the coverage and the quality of the information is being updated on a daily basis and no warranty is currently provided for these highly incomplete work.

At the moment, therefore, the PAThs team strongly discourages the usage of these still unstable data; in any case, usage is free, but all the credit goes to the PAThs project, which must be clearly and unmistakably acknowledged for its work.

### Available layers
As of April 2020 the following layers are available:

1. All site maps (Phases < 0)
1. All site maps (Phase 0)
1. All site maps (Phase 1)
1. All site maps (Phase 2)
1. All site maps (Phases > 2)

### Map legend

![WMS legend](/images/wms-legend.png "Leged of the maps served via WMS")

### Leaflet demo
For a working demo check [https://jsbin.com/judoluc/edit?output](https://jsbin.com/judoluc/edit?output). Feel free to fork and reuse.


### Available sites and maps

<ol id="map_list"></ol>

<script>
  fetch('https://xyz.paths-erc.eu/geojson/index.php')
    .then( r => r.json() )
    .then( j => j.map( e => document.getElementById('map_list').innerHTML += `<li>${e.replace(/^\.\//, '')}</li>` ) );
</script>
