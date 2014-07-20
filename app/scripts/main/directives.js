'use strict';

angular.module('walletMain')
	.directive('transactionList', function() {
    return {
      restrict: 'E',
      scope: {
        transactions: '='
      },
      templateUrl: 'partials/transaction-list.html'
    };
  });