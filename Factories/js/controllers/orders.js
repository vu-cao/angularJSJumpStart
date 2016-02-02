(function () {
    var orderController = (scope, routeParams, ordersFactory) => {
        var customerId = routeParams.customerId;
        
        scope.orders = null;
        
//        var init = () => {
            scope.orders = ordersFactory.getOrdersByCustomerId(customerId);
//                scope.customers.find((customer) => {
//                if (customer.id === customerId) {
//                    return true;
//                }
//            });
//        };
    };
    orderController.$inject = ["$scope", "$routeParams", "ordersFactory"];
    angular.module("customerModule").controller("orderController", orderController);
})();