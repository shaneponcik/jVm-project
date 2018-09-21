$(function() {
  $('#map').vectorMap({
    map: 'regions_mill',
    backgroundColor: "white",
    onRegionTipShow: function(e, el, code) {
      el.html('<b>' + el.html() + '</b></br>' +
        '<b>Number of Placements: </b>' + myData[code].numOpps);
    },
    regionsSelectable: true,
    onRegionClick: function(event, code) {
      getRegionURL(code);
    },
    regionStyle: {
      initial: {
        fill: '#dbdbdb',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      },
      hover: {
        fill: '#61b01b',
        "fill-opacity": 0.8,
        cursor: 'pointer'
      },
      selected: {
        fill: '#61b01b'
      },
      selectedHover: {}
    }
  });
  $('#map').vectorMap('get', 'mapObject').updateSize();
});