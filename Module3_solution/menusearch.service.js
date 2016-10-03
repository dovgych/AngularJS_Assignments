(function () {
'use strict';

angular.module('NarrowItDownApp')
.service('MenuSearchService', MenuSearchService);


MenuSearchService.$inject = ['$http', 'MenuUrl']
function MenuSearchService($http, MenuUrl){
	var service = this;

	service.getMenuList = function () {
		var response = $http({
			method: "GET",
			url: (MenuUrl)
		});

		return response;
	}
}
})();