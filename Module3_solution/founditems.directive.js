(function () {
'use strict';

angular.module('NarrowItDownApp')
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			list: '=myList',
			onRemove: '&'
		}
	};

	return ddo;
}
})();