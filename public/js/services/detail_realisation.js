angular.module('mean.system').factory('Realisations', ['$resource', function($resource) {
    return $resource('realisations/:realisationId', {
        realisationId: '@_id'
    }, {
        update: {
            method: 'PUT' // Override, because the default is POST 
        }
    });
}]);
