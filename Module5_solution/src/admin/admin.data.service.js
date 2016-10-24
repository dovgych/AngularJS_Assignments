(function () {
	"use strict";

angular.module('admin')
.service('DataService', DataService);

DataService.$inject = ['$http', 'ApiPath'];
function DataService($http, ApiPath) {
	var service = this;

	service.user = {};
	service.response = {};

	service.saveUser = function (newUser) {
		service.user = newUser;
		console.log("Saving user: ", service.user);
	}

	service.getUser = function () {
		console.log("Retrieving user: ", service.user);
		return service.user;
	}

	service.getDishInfo = function (dish) {
    	return $http.get(ApiPath + '/menu_items/' + dish + '.json')
    	.then(function (response) {
    		// console.log("http response: ", response.data)
    		service.response = response;
      		return service.response.data;
    	})
    	.catch(function (response) {
    		// console.log("http response status:", response.status);
     		service.response = response;
   			return service.response;//"error"
    	});
	};
}
})();