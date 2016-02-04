(function () {
    var customersFactory = ($http) => {
        
        var factory = {
            getCustomers: () => {
                return $http.get('/customers');
            },
            getCustomer: (customerId) => {
                return $http.get('/customers/' + customerId);
            }
        };
        
        return factory;
    };
    customersFactory.$inject = ['$http'];
    angular.module("customerModule").factory("customersFactory", customersFactory);
})();