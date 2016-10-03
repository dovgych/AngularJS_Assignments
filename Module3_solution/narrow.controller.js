(function () {
'use strict';

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var self = this;

	self.key = "";

	self.keyChanged = function () {
		self.getSearchResult(self.key);

	}

	var item = {
		name: "",
		shortName: "",
		description: ""
	};

	self.items = [];
	self.found = [];

	self.getSearchResult = function (key) {
		var promise = MenuSearchService.getMenuList();
		self.found = [];

		promise.then(function (response) {
			self.list = response.data.menu_items;
			for(var i = 0; i < self.list.length; i++){
				item.name = self.list[i].name;
				item.shortName = self.list[i].short_name;
				item.description = self.list[i].description;
				var str = item.shortName+', '+item.name+', '+item.description;
				if(str.includes(key))
				{
					self.found.push(str);
				}
			}
		})
		.catch(function (error) {
			console.log(error);
		})
	}

	self.clearFound = function () {
		self.found = [];
		self.items = [];
		self.key = "";
	}

	self.remove = function (index) {
		self.found.splice(index, 1);
	}
}
})();
