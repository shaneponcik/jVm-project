var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:8887/GoCorpsMap_PreCanadianChanges/regionInfo.json";
var myData;

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myData = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", url, false);
xmlhttp.send();

function getRegionURL(regionCode) {
  window.location = myData[regionCode].redirect;
}