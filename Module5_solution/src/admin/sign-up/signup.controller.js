(function () {
"use strict";

angular.module('admin')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['DataService'];
function SignUpController (DataService) {
	var $ctrl = this;

	$ctrl.user = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		favDish: "",
		favDishData: {} 
	}

	$ctrl.response = {};
	$ctrl.saved = false;
	$ctrl.favDishExists = undefined;
	$ctrl.favDishData = {};

	$ctrl.submit = function () {
		// Check if anything antered as favorite dish
		// if not - just save the new user 
		if($ctrl.user.favDish === '') {
			DataService.saveUser($ctrl.user);
			$ctrl.saved = true;
			return;
		}

		// if something was entered - check whether this dish exists
		// Create a promise to retrive data for entered dish code
		var promise = DataService.getDishInfo($ctrl.user.favDish);
		// Resolve the promise
		promise.then(function (response) {
  			console.log("getDishInfo() then response: ", response);
			if(response.status === 500)	{
				$ctrl.favDishExists = false;	
				$ctrl.saved = false;
			}
			else {
				$ctrl.favDishData = response;
    			console.log("$ctrl.favDishData: ", $ctrl.favDishData);
				$ctrl.favDishExists = true;	
				$ctrl.saved = true;
				$ctrl.user.favDishData = $ctrl.favDishData;
				DataService.saveUser($ctrl.user);
			}
		})
		// Process posiible errors
		.catch(function (response) {
  			console.log("Error: ", response);
		});
	}
}

})();