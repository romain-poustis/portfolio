angular.module('mean.system')
  .controller('ContactController', ['$scope', 'Global', 'Contact', function ($scope, Global, Contact) {
    $scope.global = Global;
    $scope.contact = Contact.query();
}]);