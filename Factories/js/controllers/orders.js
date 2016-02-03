(function () {
//    Comment to use service
//    var orderController = ($scope, routeParams, customersFactory) => {
    var orderController = ($scope, routeParams, customersService) => {
        var customerId = routeParams.customerId;
        
        $scope.customer = null;
        
//        Comment to use service
//        $scope.customer = customersFactory.getCustomer(customerId);
        $scope.customer = customersService.getCustomer(customerId);
    };
//    Comment to use service
//    orderController.$inject = ["$scope", "$routeParams", "customersFactory"];
    orderController.$inject = ["$scope", "$routeParams", "customersService"];
    angular.module("customerModule").controller("orderController", orderController);
})();