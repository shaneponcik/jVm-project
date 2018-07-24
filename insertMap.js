$(function() {
  $('#map').vectorMap({
    map: 'regions_mill',
    backgroundColor: "#3987c9",
    onRegionTipShow: function(e, el, code) {
      el.html('<b>' + el.html() + '</b></br>' +
        '<b>Number of Opportunities: </b>' + myData[code].numOpps);
    },
    regionsSelectable: true,
    onRegionClick: function(event, code) {
      getRegionURL(code);
    },
    series: {
      regions: [{
        attribute: 'fill'
      }]
    }
  });

  var mapObject = $("#map").vectorMap('get', 'mapObject');
  mapObject.series.regions[0].setValues(getColors());
});