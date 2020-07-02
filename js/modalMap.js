 /*jshint esversion: 6 */

const modalMap = {
  gjL: false,
  map: null,
  xyz: false,

  buildHtml: function(){
    const modalHtml = `
    <div id="myModal" class="modal">
      <div class="modal-dialog modal-xl" role="document">
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

  createModal: function(sheetid, seriesname, xyz){

    if ($('#myModal').length < 1) {
      this.buildHtml();
    }
    $('#myModal').modal();

    if (this.gjL){
      this.map.removeLayer(this.gjL);
    }
    if (this.xyz){
      this.map.removeLayer(this.xyz);
    }

    if (xyz){

      this.xyz = L.tileLayer(`http://xyz.paths-erc.eu/${xyz}/{z}/{x}/{y}.png`, {
        attribution: '<a href="https://paths.uniroma1.it/">PAThs: Archaeological Atlas of Coptic Literature</a>'
      }).addTo(this.map);
      this.map.setView([30.0594885,31.2584644], 5);

    } else {

      this.gjL = L.geoJSON(geojson, {
        filter: function(f){
          return sheetid ? (f.properties.fid == sheetid) : (f.properties._name == seriesname);
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


    
  }
};

if ($('.modalMap').length > -1){
  $('.modalMap').on('click', function(){
    modalMap.createModal(
      $(this).data('sheetid'), 
      $(this).data('seriesname'), 
      $(this).data('xyz')
      );
  });
}
$('.toggle').on('click', function(){
  $('#' + $(this).data('toggletarget')).toggleClass('d-none');
});

function do_search(el){
  var filter = $(el).val();
  if (!filter || filter === ''){
    $('#datasets>li').removeClass('d-none').addClass('d-block').removeClass('border border-success shadow');
    return;
  }
  if (filter.startsWith('t:')){
    filter = filter.replace('t:', '').trim();
    $.each($('#datasets>li'), function(i, el){
      if ($(el).data('type').toLowerCase().indexOf(filter.toLowerCase()) > -1){
        $(el).removeClass('d-none').addClass('d-block border border-success shadow');
      } else {
        $(el).removeClass('d-block').addClass('d-none');
      }
    });
  } else {
    $.each($('#datasets>li'), function(i, el){
      if ($(el).text().toLowerCase().indexOf(filter.toLowerCase()) > -1){
        $(el).removeClass('d-none').addClass('d-block border border-success shadow');
      } else {
        $(el).removeClass('d-block').addClass('d-none');
      }
    });
  }
  
}

$('#search-dataset').on('search', function(){
  do_search(this);
});
$('#search-dataset').on('keyup', function(){
  do_search(this);
});
