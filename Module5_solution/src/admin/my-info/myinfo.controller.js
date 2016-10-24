(function () {
"use strict";

angular.module('admin')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['currentUser', 'ApiPath'];
function MyInfoController(currentUser, ApiPath) {
	var $ctrl = this;

	$ctrl.currentUser = currentUser;
	$ctrl.basePath = ApiPath;
}



})();