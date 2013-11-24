angular.module('mean.system').factory('Home', ['$resource', function($resource) {
    return $resource('/stub/presentation.json', {}, {
        query: {method: 'GET', params: {}, isArray: false}
    });
}]);

