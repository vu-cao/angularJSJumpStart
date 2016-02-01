(function() {
    var customerModule = angular.module("customerModule", ["ngRoute"]);
    
    customerModule.config(($routeProvider) => {
        $routeProvider
            .when("/", {
                controller: "customersController",
                templateUrl: "views/customers.html"
            })
            .when("/orders/:customerId", {
                controller: "oderController",
                templateUrl: "views/orders.html"
        })
            .otherwise({
                redirectTo: "/"
            });
        });
})();