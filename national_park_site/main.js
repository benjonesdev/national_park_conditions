var weatherConditionsDeathValley = new XMLHttpRequest();
var deathValleyConditionsObj;
var weatherConditionsJoshuaTree = new XMLHttpRequest();
var joshuaTreeConditionsObj;
var weatherConditionsYosemite = new XMLHttpRequest();
var yosemiteConditionsObj;
var weatherConditionsRedwood = new XMLHttpRequest();
var redwoodConditionsObj;
var weatherConditionsSequoia = new XMLHttpRequest();
var sequoiaConditionsObj;

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
    document.getElementById('joshua-tree-conditions').innerHTML = joshuaTreeConditionsObj.current_observation.temp_f + "°F " + joshuaTreeConditionsObj.current_observation.weather;
  };

};

weatherConditionsYosemite.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/95389.json', true);
weatherConditionsYosemite.responseType = 'text';
weatherConditionsYosemite.send(null);

document.getElementById('yosemite-button').onclick = function() {
  
  if(weatherConditionsYosemite.status === 200) {
    
    yosemiteConditionsObj = JSON.parse(weatherConditionsYosemite.responseText);
    console.log(yosemiteConditionsObj);
    document.getElementById('yosemite-conditions').innerHTML = "<h3>" + yosemiteConditionsObj.current_observation.temp_f + "°F " + yosemiteConditionsObj.current_observation.weather + "</h3>";
  };

};

weatherConditionsRedwood.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/95538.json', true);
weatherConditionsRedwood.responseType = 'text';
weatherConditionsRedwood.send(null);

document.getElementById('redwood-button').onclick = function() {
  
  if(weatherConditionsRedwood.status === 200) {
    
    redwoodConditionsObj = JSON.parse(weatherConditionsRedwood.responseText);
    console.log(redwoodConditionsObj);
    document.getElementById('redwood-conditions').innerHTML = redwoodConditionsObj.current_observation.temp_f + "°F<br>" + redwoodConditionsObj.current_observation.weather;
  };

};

weatherConditionsSequoia.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/93670.json', true);
weatherConditionsSequoia.responseType = 'text';
weatherConditionsSequoia.send(null);

document.getElementById('sequoia-button').onclick = function() {
  
  if(weatherConditionsSequoia.status === 200) {
    
    sequoiaConditionsObj = JSON.parse(weatherConditionsSequoia.responseText);
    console.log(sequoiaConditionsObj);
    document.getElementById('sequoia-conditions').innerHTML = sequoiaConditionsObj.current_observation.temp_f + "°F<br>" + sequoiaConditionsObj.current_observation.weather;
  };

};