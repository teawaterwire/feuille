'use strict';

angular.module('walletNav', ['ngCookies'])
	.controller('NavCtrl', ['$scope', '$cookieStore', '$window', function($scope, $cookieStore, $window) {
	    $scope.reset = function() {
	      $cookieStore.remove('grandTotal');
	      $cookieStore.remove('transactions');
	      $window.location.reload(); 
	    };

	}]);
