var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:8887/countries.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


function myFunction(countryData) {
  var NorthAfricaPath = "";
  var SubSaharanAfricaPath = "";
  var AmericaPath = "";
  var CentralAsiaPath = "";
  var EastAsiaPath = "";
  var SouthEastAsiaPath = "";
  var EuropePath = "";
  var MiddleEastPath = "";
  var UnitedStatesPath = "";

  for (var key in countryData.paths) {
    //console.log(key + " -> " + countryData.paths[key].region);
    if (countryData.paths[key].region == "North Africa") {
      NorthAfricaPath += countryData.paths[key].path;
    } else if (countryData.paths[key].region == "Sub-Saharan Africa") {
      SubSaharanAfricaPath += countryData.paths[key].path;
    } else if (countryData.paths[key].region == "America") {
      AmericaPath += countryData.paths[key].path;
    } else if (countryData.paths[key].region == "Central Asia") {
      CentralAsiaPath += countryData.paths[key].path;
    } else if (countryData.paths[key].region == "East Asia") {
      EastAsiaPath += countryData.paths[key].path;
    } else if (countryData.paths[key].region == "South East Asia") {
      SouthEastAsiaPath += countryData.paths[key].path;
    } else if (countryData.paths[key].region == "Europe") {
      EuropePath += countryData.paths[key].path;
    } else if (countryData.paths[key].region == "Middle East") {
      MiddleEastPath += countryData.paths[key].path;
    } else if (countryData.paths[key].region == "United States") {
      UnitedStatesPath += countryData.paths[key].path;
    }
  }

  console.log(UnitedStatesPath);

  //need to write these strings to a file
}