var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:8887/CreateJVMMap/countries.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//want for ["isoa2","region-code","region-name"],
function myFunction(countryData) {
  var inputData = "";

  for (var key in countryData.paths) {
    //add iso2 to str
    inputData += ("[\"" + key + "\",");

    //add on the rest of the input data d/p on region
    if (countryData.paths[key].region == "North Africa") {
      inputData += ("\"NA\"" + ",\"" + countryData.paths[key].region + "\"],\n");
    } else if (countryData.paths[key].region == "Sub-Saharan Africa") {
      inputData += ("\"SSA\"" + ",\"" + countryData.paths[key].region + "\"],\n");
    } else if (countryData.paths[key].region == "America") {
      inputData += ("\"AM\"" + ",\"" + countryData.paths[key].region + "\"],\n");
    } else if (countryData.paths[key].region == "Central Asia") {
      inputData += ("\"CA\"" + ",\"" + countryData.paths[key].region + "\"],\n");
    } else if (countryData.paths[key].region == "East Asia") {
      inputData += ("\"EA\"" + ",\"" + countryData.paths[key].region + "\"],\n");
    } else if (countryData.paths[key].region == "South East Asia") {
      inputData += ("\"SEA\"" + ",\"" + countryData.paths[key].region + "\"],\n");
    } else if (countryData.paths[key].region == "Europe") {
      inputData += ("\"EU\"" + ",\"" + countryData.paths[key].region + "\"],\n");
    } else if (countryData.paths[key].region == "Middle East") {
      inputData += ("\"ME\"" + ",\"" + countryData.paths[key].region + "\"],\n");
    } else if (countryData.paths[key].region == "United States") {
      inputData += ("\"US\"" + ",\"" + countryData.paths[key].region + "\"],\n");
    }
  }

  console.log(inputData);
}