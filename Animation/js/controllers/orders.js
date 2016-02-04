(function () {
//    Comment to use service
    var orderController = ($scope, routeParams, customersFactory) => {
        var customerId = routeParams.customerId;
        
        $scope.customer = null;
        
        $scope.customer = customersFactory.getCustomer(customerId)
            .success(customer => $scope.customer = customer)
            .error((data, status, header, config) => {  });
    };
//    Comment to use service
    orderController.$inject = ["$scope", "$routeParams", "customersFactory"];
    
    angular.module("customerModule").controller("orderController", orderController);
})();