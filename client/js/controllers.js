// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    var vm = this;
    vm.city = cityService.city;
    $scope.$watch('home.city', function(){
       cityService.city = vm.city; 
    });
    vm.submit = function(){
        $location.path("/forecast");
    };
}]);


weatherApp.controller('forecastController',  ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    var vm = this;
    vm.city = cityService.city;
    vm.days = $routeParams.days || '2';
    
    vm.weatherResult = weatherService.getWeather(vm.city, vm.days);
    
    vm.convertToF = function(degK) {
        return Math.round(((1.8 * (degK - 273)) + 32)*100)/100;
    }
    vm.convertToC = function(degK) {
        return Math.round((degK-273.15)*100)/100;
    }
    vm.convertDate = function(dt) {
        return new Date(dt*1000);
    }
    vm.getImage = function(img) {
        return "http://openweathermap.org/img/w/" + img + ".png";
    }
    
}]);