(function () {
'use strict';

angular.module('admin')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig ($stateProvider, $urlRouterProvider) {
  // Routes
  $stateProvider
    .state('admin', {
      absract: true,
      templateUrl: 'src/admin/admin.html'
    })

    .state('admin.myinfo', {
    	url: '/myinfo',
    	templateUrl: 'src/admin/my-info/my-info.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfoCtrl',
      resolve: {
        currentUser: ['DataService', function (DataService) {
          return DataService.getUser();
        }]
      }
    })

    .state('admin.signup', {
		url: '/sign-up',
		templateUrl: 'src/admin/sign-up/sign-up.html',
		controller: 'SignUpController',
		controllerAs: 'signUpCtrl'
    });

}
})();