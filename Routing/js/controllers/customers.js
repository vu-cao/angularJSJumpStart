(function() {

    var customersController = scope => {
        scope.customers = [{
            id: 1,
            joined: '2011-11-11',
            name: 'Vu',
            city: 'NY',
            order: 10,
            orders: [
                {
                    id: 2,
                    product: "Beer",
                    total: 6
                },
                {
                    id: 3,
                    product: "Cider",
                    total: 4
                }
            ]
        }, {
            id: 2,
            joined: '2010-11-12',
            name: 'Thuy',
            city: 'SYD',
            order: 12,
            orders: [
                {
                    id: 1,
                    product: "Wine",
                    total: 12
                }
            ]
        }, {
            id: 3,
            joined: '2001-09-07',
            name: 'Thi',
            city: 'MEL',
            order: 20,
            orders: [
                {
                    id: 4,
                    product: "Spirit",
                    total: 5
                },
                {
                    id: 10,
                    product: "Meat",
                    total: 12
                },
                {
                    id: 7,
                    product: "Fish",
                    total: 3
                }
            ]
        }, {
            id: 4,
            joined: '2013-13-08',
            name: 'Phi',
            city: 'BRI',
            order: 101
        }];
        scope.sortBy = "name";
        scope.reverse = false;

        scope.sortByName = function(prop) {
            scope.sortBy = prop;
            scope.reverse = !scope.reverse;
        }
    };
    
//    Inject $scope - Option 1
//    angular.module("customerModule").controller("customersController", ["$scope", customersController]);
    
//    Inject $scope - Option 2
    customersController.$inject = ["$scope"];
    angular.module("customerModule").controller("customersController", customersController);
})();