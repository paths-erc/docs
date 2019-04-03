 /*jshint esversion: 6 */

const modalMap = {
  gjL: false,
  map: null,

  buildHtml: function(){
    const modalHtml = `
    <div id="myModal" class="modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div id="modalMap" style="width:100%; height:500px;"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;

    $('body').append(modalHtml);

    let $this = this;
    $('#myModal').on('shown.bs.modal', function(e){
      setTimeout(function() {
        $this.map.invalidateSize();
      }, 10);
    });


    this.map = L.map('modalMap');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);


  },

  createModal: function(sheetid, seriesid){
    if ($('#myModal').length < 1) {
      this.buildHtml();
    }
    $('#myModal').modal();

    if (this.gjL){
      this.map.removeLayer(this.gjL);
    }

    this.gjL = L.geoJSON(geojson, {
      filter: function(f){
        return sheetid ? (f.properties.fid == sheetid) : (f.properties.series_id == seriesid);
      }
    }).bindPopup(function (layer) {
      return `<table><caption><strong>${layer.feature.properties.name}</strong></caption>
        <tr><th>series</th><td>${layer.feature.properties._name}</td></tr>
        <tr><th>scale</th><td>${layer.feature.properties._scale}</td></tr>
        <tr><th>year</th><td>${layer.feature.properties._year}</td></tr>
        <tr><th>reference system</th><td>${layer.feature.properties._rs}</td></tr></table>`;
    }).addTo(this.map);

    this.map.fitBounds(this.gjL.getBounds(), {
      paddingTopLeft: [30, 30],
      paddingBottomRight: [30, 30]
    });
  }
};

if ($('.modalMap').length > -1){
  $('.modalMap').on('click', function(){
    modalMap.createModal($(this).data('sheetid'), $(this).data('seriesid'));
  });
}
$('.toggle').on('click', function(){
  $('#' + $(this).data('toggletarget')).toggle();
});
