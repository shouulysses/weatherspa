// ROUTES
weatherApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'pages/home.htm',
        controller: 'homeController',
        controllerAs: 'home'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController',
        controllerAs: 'forecast'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController',
        controllerAs: 'forecast'
    })
});