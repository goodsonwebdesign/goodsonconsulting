'use strict';
var WOW;
new WOW().init();
angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
      // This provides Authentication context.
      $scope.authentication = Authentication;
      
  
      
  }
 
]);
