(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Premade list page
  .state('menuCategories', {
    url: '/menu-categories',
    templateUrl: 'src/menu/templates/menu-categories-view.template.html',
    controller: 'MenuCategoriesController as catCtrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }

  })

  .state('menuItems', {
    url: '/menu-categories/category-items/{categoryShortName}',
    templateUrl: 'src/menu/templates/menu-items.template.html',
    controller: 'CategoryItemsController as itemCtrl',
    resolve: {
       menu: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                .then(function (response) {
                  // console.log("Success");
                  // console.log(response);
                  return response;
                });
                // .catch(function () {
                //   console.log("Error occured!");
                // });
      }]
    }
  });
}

})();
