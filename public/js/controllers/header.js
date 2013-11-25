angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function($scope, Global) {
        $scope.global = Global;

        $scope.menu = [{
                "title": "Home",
                "link": "/"
            }, {
                "title": "Présentation",
                "link": "articles"
            }, {
                "title": "Portfolio",
                "link": "articles/create"
            }, {
                "title": "Contact",
                "link": "articles/create"
            }];


        $scope.isCollapsed = false;
    }]);