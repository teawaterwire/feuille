'use strict';

angular.module('wallet')
  .controller('MainCtrl', function ($scope) {

    $scope.grandTotal = 0;
    $scope.transactions = [];

    function isValid(val, action) {
      if (action === 'remove') {
        return (val > 0) && ($scope.grandTotal - val >= 0) ;
      }
      return val > 0;
    }

    function processAmount(action) {
      var amount = parseFloat($scope.amount, 10);
      if (amount && !isValid(amount, action)) {
        $scope.error = 'Nope.';
        return;
      }
      $scope.error = '';
      $scope.grandTotal += (action === 'add' ? amount : -amount);
      $scope.transactions.push({
        date: new Date(),
        amount: amount,
        type: action
      });
    }

    $scope.add = function() {
      return processAmount('add');
    };

    $scope.remove = function() {
      return processAmount('remove');
    };

  })
  .directive('transactionList', function() {
    return {
      restrict: 'E',
      scope: {
        transactions: '='
      },
      templateUrl: 'partials/transaction-list.html'
    };
  });
