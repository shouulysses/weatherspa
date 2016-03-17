// DIRECTIVES
weatherApp.directive('weatherPanel', function(){
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherpanel.htm',
       replace: true,
       scope:{
           weatherObject: "=",
           convertToFFunction: "&",
           convertToCFunction: "&",
           convertDateFunction: "&",
           getImageFunction: "&",
           dateFormat: "@"
       }
   } 
});