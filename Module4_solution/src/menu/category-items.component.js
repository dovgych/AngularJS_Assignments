(function () {
'use strict';

angular.module('MenuApp')
.component('categoryItems', {
  templateUrl: 'src/menu/templates/menu-items.template.html',
  bindings: {
    items: '<'
  }
});

})();
