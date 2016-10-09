(function () {
'use strict';

angular.module('Data', []);

// test
angular.module('Data')
.config(function () {
	console.log("Data config fired!");
})
.constant('CategoryUrl', 'https://davids-restaurant.herokuapp.com/categories.json')
.constant('MenuItemUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');


})();