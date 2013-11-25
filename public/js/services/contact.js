angular.module('mean.system').factory('Contact', ['$resource', function($resource) {
    return $resource('/stub/contact.json', {}, {
        query: {method: 'GET', params: {}, isArray: false}
    });
}]);

