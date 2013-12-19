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
        when('/articles/:articleId/edit', {
            templateUrl: 'views/articles/edit.html'
        }).
        when('/articles/:articleId', {
            templateUrl: 'views/articles/view.html'
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