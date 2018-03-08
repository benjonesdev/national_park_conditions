var weatherConditionsDeathValley = new XMLHttpRequest();
var deathValleyConditionsObj;
var weatherConditionsJoshuaTree = new XMLHttpRequest();
var joshuaTreeConditionsObj;

weatherConditionsDeathValley.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/92328.json', true);
weatherConditionsDeathValley.responseType = 'text';
weatherConditionsDeathValley.send(null);

document.getElementById('death-valley-button').onclick = function() {
  
  if(weatherConditionsDeathValley.status === 200) {
    
    deathValleyConditionsObj = JSON.parse(weatherConditionsDeathValley.responseText);
    console.log(deathValleyConditionsObj);
    document.getElementById('death-valley-conditions').innerHTML = deathValleyConditionsObj.current_observation.temp_f + "°F" + deathValleyConditionsObj.current_observation.weather;
  };

};

weatherConditionsJoshuaTree.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/92277.json', true);
weatherConditionsJoshuaTree.responseType = 'text';
weatherConditionsJoshuaTree.send(null);

document.getElementById('joshua-tree-button').onclick = function() {
  
  if(weatherConditionsJoshuaTree.status === 200) {
    
    joshuaTreeConditionsObj = JSON.parse(weatherConditionsJoshuaTree.responseText);
    console.log(joshuaTreeConditionsObj);
    document.getElementById('joshua-tree-conditions').innerHTML = joshuaTreeConditionsObj.current_observation.temp_f + "°F" + joshuaTreeConditionsObj.current_observation.weather;
  };

};

/*95389 yosemite zip */