(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
MenuCategoriesController.$inject = ['items'];
function MenuCategoriesController(items) {
	// console.log("MenuCategoriesController(items); items = ", items);
  var categories = this;
  categories.items = [];
  // console.log("length: ", items.data.length);
  for(var i = 0; i < items.data.length; i++)
  {
	var item = {
		name: "",
	  	shortName: ""
	}
  	item.name = items.data[i].name;
  	item.shortName = items.data[i].short_name;
 	categories.items.push(item);
  }
  // console.log("length: ", categories.items.length);
  // console.log("items: ", categories.items)
};

})();