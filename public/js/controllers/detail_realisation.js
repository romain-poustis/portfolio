angular.module('mean.system')
  .controller('DetailRealisationController', ['$scope', 'Global', 'DetailRealisation','Realisations', function ($scope, Global, DetailRealisation, Realisations) {
    $scope.global = Global;
    
    // Par défaut on selectionne la première réal
    var detail_realisation = DetailRealisation.query(function(data) {
        $scope.real = data[0];
    });
    
    $scope.realisations = Realisations.query();
    
    /**
     * permet de choisir la real dans le scope
     * 
     * @param {int} index dans la liste
     * @returns {undefined}
     */
    $scope.getRealisation = function(index) {
        $scope.real = detail_realisation[index];
    };
}]);