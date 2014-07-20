'use strict';

angular.module('wallet')
  .controller('MainCtrl', function ($scope) {

    $scope.grandTotal = 45;

    var transactions = [];
    for (var i = 0; i < 10; i++) {
      transactions.push({date: new Date(), amount: i + Math.random(), type: (i % 3 ? 'add' : 'remove')});
    };

    $scope.transactions = transactions;

  });
