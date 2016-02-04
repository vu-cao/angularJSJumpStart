(function () {
    var headerController = function ($scope, settings) {
          $scope.settings = settings;
    };
    headerController.$inject = ['$scope', 'settings'];
    angular.module("customerModule").controller("headerController", headerController);
})();