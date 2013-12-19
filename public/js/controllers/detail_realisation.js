angular.module('mean.system')
  .controller('DetailRealisationController', ['$scope', 'Global', 'DetailRealisation','Realisations', function ($scope, Global, DetailRealisation, Realisations) {
    $scope.global = Global;
    var indexImg = 0;
    
    // Par défaut on selectionne la première réal
    var detail_realisation = DetailRealisation.query(function(data) {
        $scope.real = data[0];
        $scope.realImgSelected = $scope.real.images[0];
        indexImg = 0;
    });
    
    // On récupère toutes les réalisations
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
    
    $scope.nextImg = function() {
        if ( indexImg !== $scope.real.images.length ) {
           indexImg = indexImg + 1;
           $scope.realImgSelected = $scope.real.images[indexImg];
        }
    };
    
    $scope.hasNext = function() {
      return $scope.real.images.length !== 1 && indexImg !== $scope.real.images.length - 1;  
    };
    
    $scope.previousImg = function() {
        if ( indexImg !== 0 ) {
           indexImg = indexImg - 1;
           $scope.realImgSelected = $scope.real.images[indexImg];
        }
    };
    
    $scope.hasPrevious = function() {
      return indexImg !== 0;  
    };
    
    // --------------------------- //
    //            CRUD
    // --------------------------- //
    $scope.create = function() {
        var article = new Realisation({
            title: this.title,
            content: this.content
        });
        article.$save(function(response) {
            $location.path("articles/" + response._id);
        });

        this.title = "";
        this.content = "";
    };
    
}]);