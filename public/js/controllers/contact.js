angular.module('mean.system')
  .controller('ContactController', ['$scope', 'Global', 'Contact', 'Mail', function ($scope, Global, Contact, Mail) {
    $scope.global = Global;
    $scope.contact = Contact.query();

    $scope.client = {};
    
    $scope.sendMail = function() {
        Mail.create( $scope.client );
    };
}]);