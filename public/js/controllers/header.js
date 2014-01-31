angular.module('mean.system').controller('HeaderController', ['$scope', '$route','$location', '$anchorScroll', 'Global', function($scope, $route, $location, $anchorScroll, Global) {
        $scope.global = Global;

        $scope.menu = [{
                "title": "Preview",
                "link": "/"
            }, {
                "title": "Ajouter Réalisation",
                "link": "realisations/create"
            }, {
                "title": "Lister réalisations",
                "link": "realisations/list"
            }];

        $scope.isCollapsed = false;

        // Si jamais il y a eu une erreur d'authentification
        // le routeur app/config/routes.js nous redirige vers /signin/true
        // donc on peut savoir si quelque chose c'est mal passé
        $scope.hasErr = $route.current.params.err === 'true';
        
        $scope.scrollTo = function(id) {
            var old = $location.hash();
            $location.hash(id);
            $anchorScroll();
            $location.hash(old);
        };
    }]);