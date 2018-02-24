'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
.controller('MoviesCtrl', function ($scope, Movie) {
  $scope.movies = Movie.getList().$object;
});
