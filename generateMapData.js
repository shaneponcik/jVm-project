var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:8887/regionInfo.json";
var myData;

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myData = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", url, false);
xmlhttp.send();

function getColors() {
  var colors = {},
    key;
  for (key in myData) {
    colors[key] = myData[key].color;
  }
  return colors;
}

function getRegionURL(regionCode) {
  window.location = myData[regionCode].redirect;
}