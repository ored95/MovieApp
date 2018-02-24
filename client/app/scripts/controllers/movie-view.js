'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('MovieViewCtrl', function($scope, $routeParams, Movie) {
    $scope.viewMovie = true;
    $scope.movie = Movie.one($routeParams.id).get().$object;
  });
