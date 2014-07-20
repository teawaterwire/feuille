'use strict';

angular.module('walletMain', ['ngCookies'])
  .controller('MainCtrl', ['$scope', '$cookieStore', function ($scope, $cookieStore) {

    $scope.grandTotal = $cookieStore.get('grandTotal') || 0;
    $scope.transactions = $cookieStore.get('transactions') || [];

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
      // Update grandTotal
      $scope.grandTotal += (action === 'add' ? amount : -amount);
      // Update transactions
      $scope.transactions.push({
        date: new Date(),
        amount: amount,
        type: action
      });
      // Store grandTotal and transactions with cookieStore
      $cookieStore.put('grandTotal', $scope.grandTotal);
      $cookieStore.put('transactions', $scope.transactions);
    }

    $scope.add = function() {
      return processAmount('add');
    };

    $scope.remove = function() {
      return processAmount('remove');
    };

  }]);
