(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope, $filter) {
  $scope.list = "";
  $scope.numbOfMeals = 3;
  $scope.message = "";

  $scope.checkList = function (){
    if(stringIsEmpty($scope.list))
    {
      $scope.message = "Please enter data first";
      return;
    }

    $scope.numbOfMeals = calcNumbOfMeals($scope.list);
    if($scope.numbOfMeals <= 3)
      $scope.message = "Enjoy!";
    else
      $scope.message = "Too much!";
  };
}

function calcNumbOfMeals(string) {
  var result = string.split(',');
  return result.length; 
};

function stringIsEmpty(string)
{
  string = string.trim();
  if(string == "")
    return true;
  else
    return false;
};

})();