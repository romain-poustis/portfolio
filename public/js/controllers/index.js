angular.module('mean.system')
  .controller('IndexController', ['$scope', 'Global', 'Home', function ($scope, Global, Home) {
    $scope.global = Global;
    $scope.home = Home.query();
}]);