---
name: Maps of Buildings of Christian Architecture
type: vector_map
date_created: 2020-04-30
scale: multiple
rs: EPSG:4326
preview: false
copyright: Peter Grossmann & PAThs team.
license: CC BY-NC-SA 4.0
availability:
  geojson: https://xyz.paths-erc.eu/
  other: Access is limited to a close list of domains. If you want to use the maps, please write to julian.bogdani at uniroma1 dot it
credits:
  - role: Topographical survey & map drafting
    name: Peter Grossmann
  - role: Digitization, georeferencing, vectorization
    name: PAThs team
---

The PAThs team is currently working on the georeferencing and vectorisation of the maps of Christian religious buildings, such as chapels, churches, monasteries, basilicas, etc. When possible these data will be completed with information on previous building phases. In some cases, a broader urban context is also provided, although the current coverage is highly uneven.

A very premature stage of this work is being published in real time in the Atlas. The map preview of each Place displays the already available maps of a specific site; the coverage and the quality of the information is being updated on a daily basis and no warranty is currently provided for these highly incomplete work.

At the moment, therefore, the PAThs team strongly discourages the usage of these still unstable data; in any case, usage is free, but all the credit goes to the PAThs project, which must be clearly and unmistakably acknowledged for its work.

To use the geographical data in your website or webGIS, please contact us at `julian.bogdani at uniroma1 dot it`

### Available sites and maps

<ol id="map_list"></ol>

<script>
  fetch('https://atlas.paths-erc.eu/places-geojson/index.json')
    .then( r => r.json() )
    .then( j => j.map( e => document.getElementById('map_list').innerHTML += `<li>https://atlas.paths-erc.eu/places-geojson/${e.replace(/^\.\//, '')}</li>` ) );
</script>
