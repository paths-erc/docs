const LeafletMap = function(map_list){
    
    const map = L.map('map', {
        maxZoom: 25
    });
    
    var basemaps = {
        // https://stackoverflow.com/a/32391908/586449
        'Bing': new L.BingLayer('Aq-XTwgJPPpTJNGBrW2yGvw2wGrI14YX5rDMbwcGYwvncAIFCTkZANh3n_Quup5q', {
            type: 'Aerial',
            maxZoom: 20
        }),
        'GoogleSat': L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
        }),
        'OSM': L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        'Pelagios': L.tileLayer('http://pelagios.org/tilesets/imperium/{z}/{x}/{y}.png', {
            maxZoom: 11
        })
    };

    basemaps['Bing'].addTo(map);

    const controlLayers = L.control.layers(basemaps).addTo(map);

    let overlays = {};

    const sites = L.control({position: 'bottomleft'});
    sites.onAdd = function(){
        const div = L.DomUtil.create('div', 'bg-white shadow rounded p-2 border');
        div.innerHTML = `<div class="text-center">
        <div class="form-group">
          <label for="sites">Select a site</label>
          <input type="search" id="sites" name="example" list="mapList" class="form-control">
          <datalist id="mapList">
          ${map_list.map( e => { return `<option value="${e.replace(/^\.\//, '')}" ${ e == window.location.hash.split('#')[1] ? 'selected' : ''}>${e.replace(/\-/g, ' ').replace(/^\.\//, '')}</option>`; })}
          </datalist>
          </div>
          <div class="text-center">
            <img src="favicon.png" alt="Vectoriazation protocol example" style="max-width:50px"/>
            Created by <a href="http://paths.uniroma1.it" target="_blank" title="PAThs / Julian Bogdani">Julian Bogdani @ PAThs</a>.
            <a href="../">Back to the docs</a>
          </div>
        </div>`;
        return div;
      }
      sites.addTo(map);


      this.GeoJsonOnMap = (gj) => {
        
        // Remove already available overlays
        Object.keys(overlays).forEach( function(k){
          map.removeLayer(overlays[k]);
          controlLayers.removeLayer(overlays[k]);
        });
        overlays = {};

        var phases = [];
        gj.features.forEach( function(f, i){
          // Set heights:
          if (!f.properties.height){
            if (f.properties.part === 'l' || f.properties.part === 'd'){
              gj.features[i].properties.height = .1;
            } else {
              gj.features[i].properties.height = 1;
            }
            gj.features[i].properties.minHeight = 0;
          }

          var ph = f.properties.phase ? f.properties.phase : '0';
          if (phases.indexOf('Phase ' + ph) < 0){
            phases.push('Phase ' + ph);
          }
        });
        phases.sort().forEach(function(p){
          overlays[p] = L.layerGroup();
        });

        var geojsonLayer = new L.GeoJSON(gj, {
          style: getStyle,
          onEachFeature: function(f, l){
            if (!f.properties.phase) {
              l.addTo(overlays['Phase 0']);
            } else {
              l.addTo(overlays['Phase ' + f.properties.phase]);
            }
            l.bindPopup('<table class="table table-bordered table-sm">' +
              '<tr>' +
                '<th>PAThs Place (place)</th>' +
                '<td><a href="https://atlas.paths-erc.eu/places/' + f.properties.place + '">paths.places.' + f.properties.place + '</a></td>' +
              '</tr>' +
              '<tr>' +
                '<th>Building / Area (subplace)</th>' +
                '<td>' + f.properties.subplace + '</td>' +
              '</tr>' +
              '<tr>' +
                '<th>Bibliographic reference (source)</th>' +
                '<td><a href="https://www.zotero.org/groups/2189557/erc-paths/items/itemKey/' + f.properties.source + '">PAThs Zotero ' + f.properties.source + '</a></td>' +
              '</tr>' +
              '<tr>' +
                '<th>Details of the bibliographic reference (subsource)</th>' +
                '<td>' + f.properties.subsource + '</td>' +
              '</tr>' +
              '<tr>' +
                '<th>Phase</th>' +
                '<td>' + f.properties.phase + '</td>' +
              '</tr>' +
              '<tr>' +
                '<th>Digitized by</th>' +
                '<td>' + f.properties.operator + '</td>' +
              '</tr>' +
            '</table>'
              )
          }
        });

        // Initialises OSMBuildings for 2.5D data
        let osmb = new OSMBuildings().set(gj);
        // Add OSMBuildings to layers list
        overlays['3D'] = osmb;

        // Turn on all layers except the 2.5D one.
        // Add all layers to the layer control
        Object.keys(overlays).forEach( function(k){
          if (k !== '3D'){
            overlays[k].addTo(map);
          }
          controlLayers.addOverlay(overlays[k], k);
        });

        // Zoom and pan ma to fit GeoJSON bounds
        map.fitBounds(geojsonLayer.getBounds());

      }

      const getStyle = f => {
        var p = f.properties;
        
        // Default stroke and fill opacity
        var s = {
            weight: 2,
            fillOpacity: .2
        };
        
        // Set opacity variable
        var opacity;
        
        // Reconstructed features have dashed strokes and .4 opacity
        if (p.reconstr){
            s.dashArray = '4 4';
            opacity = 0.4;
        } else {
            // Other features have .8 opacity
            opacity = 0.8
        }
        
        // Differentiate strike and fill colors by phase
        switch(true){
            case (p.phase < -1):
            s.color = 'rgba(150, 150, 150, ' + opacity + ')';
            s.fillColor = 'rgba(150, 150, 150, .4)';
            break;
            case (p.phase == -1):
            s.color = 'rgba(61, 90, 128, ' + opacity + ')';
            s.fillColor = 'rgba(61, 90, 128, .4)';
            break;
            case (p.phase == 1):
            s.color = 'rgba(247, 110, 1, ' + opacity + ')';
            s.fillColor = 'rgba(247, 110, 1, .4)';
            break;
            case (p.phase == 2):
            s.color = 'rgba(194, 0, 251, ' + opacity + ')';
            s.fillColor = 'rgba(194, 0, 251, .4)';
            break;
            case (p.phase == 3):
            s.color = 'rgba(56, 134, 89, ' + opacity + ')';
            s.fillColor = 'rgba(56, 134, 89, .4)';
            break;
            case (p.phase > 3):
            s.color = 'rgba(80, 47, 76, ' + opacity + ')';
            s.fillColor = 'rgba(56, 134, 89, .4)';
            break;
            default:
            s.color = 'rgba(31, 120, 180, ' + opacity + ')';
            s.fillColor = 'rgba(31, 120, 180, .4)';
            break;
        }
        
        // Set style for upper projections
        if (p.part && p.part.indexOf('u') > -1) {
            s.fill = false;
            s.color = 'rgba(0, 0, 0, .2)';
            
            // Set style for lower projections
        } else if (p.part && p.part.indexOf('l') > -1) {
            s.fillColor = 'rgba(0, 0, 0, .1)';
            s.color = 'rgba(0, 0, 0, .2)';
            
            // Set style for doorways
        } else if (p.part && p.part.indexOf('d') > -1) {
            s.fillColor = 'rgba(171, 221, 164, .8)';
            s.color = 'rgba(171, 221, 164, 1)';
        }
        
        // finished: return the style object
        return s;
    };
};

const loadGeoJSONFromUrl = (cb) => {
    fetch(`https://atlas.paths-erc.eu/places-geojson/${window.location.hash.split('#')[1]}.geojson`)
        .then(r => r.json() )
        .then(j => cb(j));
}


const loadPage = async () => {

    const response = await fetch('https://xyz.paths-erc.eu/geojson/index.php');
    const map_list = await response.json();
    
    const myMap = new LeafletMap(map_list);

    document.querySelector('#sites').addEventListener('change',function(){
        if (this.value){
            window.location.hash = this.value;
        }
    });
    window.onhashchange = function () {
        loadGeoJSONFromUrl(myMap.GeoJsonOnMap);
        return;
    }
    if (!window.location.hash){
        window.location.hash = map_list[0];
    }
    loadGeoJSONFromUrl(myMap.GeoJsonOnMap);
};