(function() {

//    Comment to use service
//    var customersController = ($scope, customersFactory) => {
    var customersController = ($scope, $log, customersService, settings) => {
        $scope.sortBy = "name";
        $scope.reverse = false;

        $scope.sortByName = function(prop) {
            $scope.sortBy = prop;
            $scope.reverse = !$scope.reverse;
        };
        
        init = () => {
//            Comment to use service
//            $scope.customers = customersFactory.getCustomers();
            customersService.getCustomers()
                .success(customers => $scope.customers = customers)
                .error((data, status, header, config) => {
                    $log.log('ERROR!');
                });
            $scope.settings = settings;
        };
        
        init();
    };
    
//    Inject $scope - Option 1
//    angular.module("customerModule").controller("customersController", ["$scope", customersController]);
    
//    Inject $scope - Option 2
//    Comment to use service
//    customersController.$inject = ["$scope", "customersFactory"];
    customersController.$inject = ["$scope", '$log', "customersService", "settings"];
    angular.module("customerModule").controller("customersController", customersController);
})();