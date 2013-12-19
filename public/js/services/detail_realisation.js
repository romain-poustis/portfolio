angular.module('mean.system').factory('Realisations', ['$resource', function($resource) {
    return $resource('realisations/:realisationId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT' // Override, because the default is POST 
        }
    });
}]);
