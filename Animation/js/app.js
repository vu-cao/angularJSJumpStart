(function() {
    var customerModule = angular.module("customerModule", ["ngRoute"]);
    
    customerModule.config(($routeProvider) => {
        $routeProvider
            .when("/", {
                controller: "customersController",
                templateUrl: "views/customers.html"
            })
            .when("/orders/:customerId", {
                controller: "orderController",
                templateUrl: "views/orders.html"
            })
            .when('/allorders', {
                controller: 'allOrdersController',
                templateUrl: 'views/allorders.html'
            })
            .otherwise({
                redirectTo: "/"
            });
        });
})();