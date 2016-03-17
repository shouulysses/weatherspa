//SERVICE
weatherApp.service('cityService', function(){
    var vm = this;
    vm.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource){
    
    this.getWeather = function(city, days) {    
    
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

        return weatherAPI.get({ q: city, cnt: days, appid: 'b1b15e88fa797225412429c1c50c122a' });
    };
    
}]);