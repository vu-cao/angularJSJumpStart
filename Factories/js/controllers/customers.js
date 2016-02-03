(function() {

//    Comment to use service
//    var customersController = ($scope, customersFactory) => {
    var customersController = ($scope, customersService) => {
        $scope.sortBy = "name";
        $scope.reverse = false;

        $scope.sortByName = function(prop) {
            $scope.sortBy = prop;
            $scope.reverse = !$scope.reverse;
        };
        
        init = () => {
//            Comment to use service
//            $scope.customers = customersFactory.getCustomers();
            $scope.customers = customersService.getCustomers();
        };
        
        init();
    };
    
//    Inject $scope - Option 1
//    angular.module("customerModule").controller("customersController", ["$scope", customersController]);
    
//    Inject $scope - Option 2
//    Comment to use service
//    customersController.$inject = ["$scope", "customersFactory"];
    customersController.$inject = ["$scope", "customersService"];
    angular.module("customerModule").controller("customersController", customersController);
})();