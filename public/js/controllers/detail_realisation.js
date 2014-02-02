angular.module('mean.system')
  .controller('DetailRealisationController', ['$scope', '$location', '$route', '$routeParams','Global', 'Realisations', 
      function ($scope, $location, $route, $routeParams, Global, Realisations) {
    
    // --------------------------- //
    //         General
    // --------------------------- //      
    $scope.global = Global;
    var indexImg = 0;
    var limit = 17;
    
    $scope.init = function() {
        // Et on recupère les résumés des autres réal
        Realisations.query(function(reals) {
            $scope.realisations = reals;
            $scope.realsVisible = reals.slice(0,limit);
            // Par défaut on selectionne la première réal
            Realisations.get({realisationId: $scope.realisations[0].id}, function(real) {
                $scope.real = real;
                $scope.slides = real.images.map( function( el ){
                    return { image: el };
                });
            });
        });
    };
    
    $scope.initEdit = function() {
        // On récupère la réalisation que l'on veut modifier
        $scope.findOne( $routeParams.realisationId );
    };
    
    $scope.addImg = function() {
        if ( !$scope.real ) {
            $scope.real = {};
            $scope.real.images = [];
        }
        $scope.real.images.push( this.imgName );
    };
    
    $scope.removeImg = function( index ) {
        $scope.real.images.splice(index,1);
    };
    
    // --------------------------- //
    //         Realisatoins
    // --------------------------- //
    $scope.nextReal = function() {
        if ($scope.realisations.length >= limit + indexImg ) {
           indexImg = indexImg + limit;
           $scope.realsVisible = $scope.realisations.slice(indexImg,indexImg + limit);
        }
    };
    
    $scope.hasNext = function() {
      return $scope.real && $scope.realisations.length > limit &&  $scope.realisations.length > limit + indexImg;  
    };
    
    $scope.previousReal = function() {
        if ( indexImg >= limit ) {
           indexImg = indexImg - limit;
           $scope.realsVisible = $scope.realisations.slice(indexImg,indexImg + limit);
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
        
        // .$$childHead à cause de l'inclusion de formReal.html
        // qui crée un nouveau scope, c'est moche...
        var article = new Realisations({
            titre: this.real.titre,
            date: this.real.date,
            lien: this.real.lien,
            images: $scope.real.images,
            description: this.real.description
        });
        article.$save(function() {
            $location.path("/realisations/list");
        });

        // Clear the form
        this.real.titre = "";
        this.real.date = "";
        this.real.lien = "";
        this.real.description= "";
    };
    
    // get all the realisation  
    $scope.find = function(query) {
        Realisations.query(query, function(reals) {
            $scope.realisations = reals;
            $scope.realsVisible = reals.slice(0,limit);
        });
    };
    
    // get one realisation
    $scope.findOne = function(id) {
        Realisations.get({realisationId: id}, function(real) {
            $scope.real = real;
            $scope.slides = real.images.map( function( el ){
                    return { image: el };
                });
        });
    };
    
    // remove the real
    $scope.destroy = function(real) {
        real.$remove();
        for (var i in $scope.realisations) {
            if ($scope.realisations[i] === real) {
                $scope.realisations.splice(i, 1);
            }
        }
    };
   
   // remove the real by id
    $scope.destroyById = function(id) {
        Realisations.get({realisationId: id}, function(real) {
            real.$remove();
            for (var i in $scope.realisations) {
                if ($scope.realisations[i] === real) {
                    $scope.realisations.splice(i, 1);
                }
            }
            $route.reload();
        });
    };
    
    // Update the real
    $scope.update = function() {
        var real = $scope.real;
        real.$update(function() {
            $location.path('/realisations/list');
        });
    };
}]);
