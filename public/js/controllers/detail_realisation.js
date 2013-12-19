angular.module('mean.system')
  .controller('DetailRealisationController', ['$scope', '$location','Global', 'Realisations', function ($scope, $location, Global, Realisations) {
    
    // --------------------------- //
    //         Carroussel
    // --------------------------- //      
    $scope.global = Global;
    var indexImg = 0;
    
    $scope.init = function() {
        // Par défaut on selectionne la première réal
        Realisations.get({realisationId: 1}, function(data) {
            $scope.real = data[0];
            $scope.realImgSelected = $scope.real.images[0];
            indexImg = 0;
        });
        // Et on recupère les résumés des autres réal
        find();
    };
    
    // --------------------------- //
    //         Carroussel
    // --------------------------- //
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
    // Create a realisation
    $scope.create = function() {
        
        var article = new Realisations({
            titre: this.real.titre,
            date: this.real.date,
            lien: this.real.lien,
            description: this.real.description
        });
        article.$save(function() {
            $location.path("/");
        });

        // Clear the form
        this.real.titre = "";
        this.real.date = "";
        this.real.lien = "";
        this.real.description= "";
    };
    
    // get all the realisation  
    var find = function(query) {
        Realisations.query(query, function(reals) {
            $scope.realisations = reals;
        });
    };
    
    // get one realisation
    var findOne = function(id) {
        Realisations.get({realisationId: id}, function(real) {
            $scope.real = real;
        });
    };
   
}]);