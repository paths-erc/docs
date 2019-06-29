---
layout: null
permalink: /data/geojson/index.js
---
{% include geojson-index.html %}

(function(){

  var geoJsonData = {

    index: {{ arr | jsonify }},

    /**
     * Returns array of geoJson files matching paths place id
     * @param  {int} p Paths place identifier
     * @return {array}   Array of geojson file names
     */
    getPathsPlace: function (p){
      return this.index.filter( function(el){
        var regex = new RegExp('^paths\.places\.' + p + '\\b');
        return regex.test(el);
      } );
    }

  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = geoJsonData;
  } else {
    window.geoJsonData = geoJsonData;
  }
})();
