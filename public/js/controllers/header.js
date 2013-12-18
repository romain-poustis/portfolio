angular.module('mean.system').controller('HeaderController', ['$scope', '$route', 'Global', function($scope, $route, Global) {
        $scope.global = Global;

        $scope.menu = [{
                "title": "Preview",
                "link": "/"
            }, {
                "title": "Ajouter Réalisation",
                "link": "realisations/create"
            }];

        $scope.isCollapsed = false;

        // Si jamais il y a eu une erreur d'authentification
        // le routeur app/config/routes.js nous redirige vers /signin/true
        // donc on peut savoir si quelque chose c'est mal passé
        $scope.hasErr = $route.current.params.err === 'true';
    }]);