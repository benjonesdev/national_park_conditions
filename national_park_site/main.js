var weatherConditionsDeathValley = new XMLHttpRequest();
var deathValleyConditionsObj;
var weatherConditionsJoshuaTree = new XMLHttpRequest();
var joshuaTreeConditionsObj;
var weatherConditionsYosemite = new XMLHttpRequest();
var yosemiteConditionsObj;

weatherConditionsDeathValley.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/92328.json', true);
weatherConditionsDeathValley.responseType = 'text';
weatherConditionsDeathValley.send(null);

document.getElementById('death-valley-button').onclick = function() {
  
  if(weatherConditionsDeathValley.status === 200) {
    
    deathValleyConditionsObj = JSON.parse(weatherConditionsDeathValley.responseText);
    console.log(deathValleyConditionsObj);
    document.getElementById('death-valley-conditions').innerHTML = deathValleyConditionsObj.current_observation.temp_f + "°F<br>" + deathValleyConditionsObj.current_observation.weather;
  };

};

weatherConditionsJoshuaTree.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/92277.json', true);
weatherConditionsJoshuaTree.responseType = 'text';
weatherConditionsJoshuaTree.send(null);

document.getElementById('joshua-tree-button').onclick = function() {
  
  if(weatherConditionsJoshuaTree.status === 200) {
    
    joshuaTreeConditionsObj = JSON.parse(weatherConditionsJoshuaTree.responseText);
    console.log(joshuaTreeConditionsObj);
    document.getElementById('joshua-tree-conditions').innerHTML = joshuaTreeConditionsObj.current_observation.temp_f + "°F<br>" + joshuaTreeConditionsObj.current_observation.weather;
  };

};

weatherConditionsYosemite.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/95389.json', true);
weatherConditionsYosemite.responseType = 'text';
weatherConditionsYosemite.send(null);

document.getElementById('yosemite-button').onclick = function() {
  
  if(weatherConditionsYosemite.status === 200) {
    
    yosemiteConditionsObj = JSON.parse(weatherConditionsYosemite.responseText);
    console.log(yosemiteConditionsObj);
    document.getElementById('yosemite-conditions').innerHTML = yosemiteConditionsObj.current_observation.temp_f + "°F<br>" + yosemiteConditionsObj.current_observation.weather;
  };

};

/*
weatherConditionsYosemite.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/95389.json', true);
weatherConditionsYosemite.responseType = 'text';
weatherConditionsYosemite.send(null);

document.getElementById('yosemite-button').onclick = function() {
  
  if(weatherConditionsYosemite.status === 200) {
    
    yosemiteConditionsObj = JSON.parse(weatherConditionsYosemite.responseText);
    console.log(yosemiteConditionsObj);
    document.getElementById('yosemite-conditions').innerHTML = yosemiteConditionsObj.current_observation.temp_f + "°F<br>" + yosemiteConditionsObj.current_observation.weather;
  };

};

95389 yosemite zip */