'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('MovieDeleteCtrl', function($scope, $routeParams, Movie, $location) {
    $scope.movie = Movie.one($routeParams.id).get().$object;
    $scope.deleteMovie = function() {
      $scope.movie.remove().then(function() {
        $location.path('/movies');
      });
    };
    $scope.back = function() {
      $location.path('/movie/' + $routeParams.id);
    };
  });
