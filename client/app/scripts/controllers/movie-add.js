'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('MovieAddCtrl', function($scope, Movie, $location) {
    $scope.movie = {};
    $scope.saveMovie = function() {
      Movie.post($scope.movie).then(function() {
        $location.path('/movies');
      });
    };
  });