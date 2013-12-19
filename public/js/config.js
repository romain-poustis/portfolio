//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/realisations/list', {
            templateUrl: 'views/realisations/list.html'
        }).
        when('/realisations/create', {
            templateUrl: 'views/realisations/create.html'
        }).
        when('/realisations/edit/:realisationId', {
            templateUrl: 'views/realisations/edit.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        when('/signin', {
            templateUrl: 'views/signin.html'
        }).
        when('/signin/:err', {
            templateUrl: 'views/signin.html'
        }).        
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);