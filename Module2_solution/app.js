(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyListController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtListController)
.service('ShoppingListCheckOffService', ShoppingListService)

function ShoppingListService() {
  var service = this;

var sList = [
  "1 bottle of Milk", "6 Donuts", "2 bags of Cookies", "1 Chocolate Bar", "1 can of Peanut Butter"
];
  // Lists of shopping items
  service.toBuyItems = sList;
  service.boughtItems = [];

  service.buyItem = function (itemIndex) {
     var buff = service.toBuyItems[itemIndex];
    service.boughtItems.push(buff);
    service.toBuyItems.splice(itemIndex, 1);
  }
}


ToBuyListController.$inject = ['ShoppingListCheckOffService'];
function ToBuyListController(ShoppingListService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListService.toBuyItems;

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListService.buyItem(itemIndex);
    // toBuyList.isEmpty = (ShoppingListService.toBuyItems.length == 0);
  };
}

AlreadyBoughtListController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtListController(ShoppingListService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListService.boughtItems;
  // alreadyBought.isEmpty = (ShoppingListService.boughtItems.length == 0);
  
}

})();
