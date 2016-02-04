(function() {
    var customersService = function ($http) {
        this.getCustomers = () => {
            return $http.get('/customers');
//            return customers;
        };
        this.getCustomer = (customerId) => {
            return $http.get('/customers/' + customerId);
//            var customer = customers.find((customer) => {
//                if (customer.id === Number.parseInt(customerId)) {
//                    return true;
//                }
//            });
//            return customer;
        };
    };
    customersService.$inject = ['$http'];
    angular.module("customerModule").service("customersService", customersService);
})();