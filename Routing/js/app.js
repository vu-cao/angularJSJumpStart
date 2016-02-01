(function() {
    var customerModule = angular.module("customerModule", ["ngRoute"]);
    
    customerModule.config(($routeProvider) => {
        $routeProvider
            .when("/", {
                controller: "customersController",
                templateUrl: "views/customers.html"
            })
//            .when("", {
//            
//        })
            .otherwise({
                redirectTo: "/"
            });
        });
})();