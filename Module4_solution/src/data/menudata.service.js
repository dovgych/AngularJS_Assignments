(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'CategoryUrl', 'MenuItemUrl']
function MenuDataService($http, CategoryUrl, MenuItemUrl) {
	var service = this;

	// service.items = [];
	// service.items.push("datastr1");
	// service.items.push("datastr2");

	service.getAllCategories = function () {
		// console.log("entered getAllCategories()");
		var response = $http({
			method: "GET",
			url: (CategoryUrl)
		});
		// var response = service.items;
		// console.log("responce: ", response);
		return response;
	};

	service.getItemsForCategory = function (categoryShortName) {
		var requestUrl = MenuItemUrl+categoryShortName;
		// console.log("requesting url:", requestUrl);
		var response = $http({
			method: "GET",
			url: (requestUrl)
		});

	console.log("response: ", response);
		return response;
	};
}


})();