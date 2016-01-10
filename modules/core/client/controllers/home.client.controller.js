'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
      // This provides Authentication context.
      $scope.authentication = Authentication;

      var data = [
         { image: 'modules/core/client/img/brand/logo_2_4.png' },
         { image: 'modules/core/client/img/brand/logo_2_4.png' },
         { image: 'modules/core/client/img/brand/logo_2_4.png' }
      ];
      //function initGalleria() {
          
      //    if (angular.isDefined(Galleria)) {
      //        Galleria.run('.galleria', {
      //            dataSource: data,
      //        });
      //    }
      //}
      //initGalleria();

  }

]);
