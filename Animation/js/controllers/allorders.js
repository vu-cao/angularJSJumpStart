(function () {
    var allOrdersController = function ($scope, customersFactory) {
        customersFactory.getAllOrders()
            .success(orders => {
                $scope.orders = orders;
            });
    };
    
    allOrdersController.$inject = ['$scope', 'customersFactory'];
    angular.module('customerModule').controller('allOrdersController', allOrdersController);
}) ();