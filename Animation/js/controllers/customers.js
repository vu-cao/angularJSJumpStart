(function() {

    var customersController = ($scope, $log, customersFactory, settings) => {
        $scope.sortBy = "name";
        $scope.reverse = false;

        $scope.sortByName = function(prop) {
            $scope.sortBy = prop;
            $scope.reverse = !$scope.reverse;
        };
        
        init = () => {

            customersFactory.getCustomers()
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
    customersController.$inject = ["$scope", '$log', "customersFactory", "settings"];
    angular.module("customerModule").controller("customersController", customersController);
})();