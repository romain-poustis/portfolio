angular.module('mean.system').factory('Realisations', ['$resource', function($resource) {
    return $resource('/stub/realisations.json', {}, {
        query: {method: 'GET', params: {}, isArray: true}
    });
}]);

angular.module('mean.system').factory('DetailRealisation', ['$resource', function($resource) {
    return $resource('/stub/detail_realisation.json', {}, {
        query: {method: 'GET', params: {}, isArray: true}
    });
}]);