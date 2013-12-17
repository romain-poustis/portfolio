angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function($scope, Global) {
        $scope.global = Global;

        $scope.menu = [{
                "title": "Preview",
                "link": "/"
            }, {
                "title": "Ajouter Réalisation",
                "link": "articles"
            }];

        $scope.isCollapsed = false;
        
    }]);