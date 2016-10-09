(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);


CategoryItemsController.$inject = ['menu'];
function CategoryItemsController(menu) {

  var itemsCtrl = this;

  itemsCtrl.category = menu.data.category.name;
  itemsCtrl.items = [];
  for(var i = 0; i < menu.data.menu_items.length; i++)
  {
  	var myitem = {
  		  name: "",
  	  	shortName: "",
        description: "",
        priceLarge: 0,
        priceSmall: 0
  	}
    myitem.name = menu.data.menu_items[i].name;
    myitem.shortName = menu.data.menu_items[i].short_name;
    myitem.description = menu.data.menu_items[i].description;
    myitem.priceSmall = menu.data.menu_items[i].price_small;
    myitem.priceLarge = menu.data.menu_items[i].price_large;
   	itemsCtrl.items.push(myitem);
  }
};

})();