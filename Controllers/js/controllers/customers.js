function customersController($scope) {
    $scope.customers = [{
        joined: '2011-11-11',
        name: 'Vu',
        city: 'NY',
        order: 10
    }, {
        joined: '2010-11-12',
        name: 'Thuy',
        city: 'SYD',
        order: 12
    }, {
        joined: '2001-09-07',
        name: 'Thi',
        city: 'MEL',
        order: 20
    }, {
        joined: '2013-13-08',
        name: 'Phi',
        city: 'BRI',
        order: 101
    }];
    $scope.sortBy = "name";
    $scope.reverse = false;

    $scope.sortByName = function(prop) {
        $scope.sortBy = prop;
        $scope.reverse = !$scope.reverse;
    }
}

function customersControllerAs() {
    this.customers = [{
        joined: '2011-11-11',
        name: 'Vu',
        city: 'NY',
        order: 10
    }, {
        joined: '2010-11-12',
        name: 'Thuy',
        city: 'SYD',
        order: 12
    }, {
        joined: '2001-09-07',
        name: 'Thi',
        city: 'MEL',
        order: 20
    }, {
        joined: '2013-13-08',
        name: 'Phi',
        city: 'BRI',
        order: 101
    }];
    this.sortBy = "name";
    this.reverse = false;

//    var self = this;
    this.sortByName = function(prop) {
        this.sortBy = prop;
        this.reverse = !this.reverse;
    }
}

